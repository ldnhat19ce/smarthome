package com.ldnhat.smarthome.service.impl;

import com.ldnhat.smarthome.domain.Device;
import com.ldnhat.smarthome.domain.SpeechData;
import com.ldnhat.smarthome.repository.DeviceRepository;
import com.ldnhat.smarthome.repository.SpeechDataRepository;
import com.ldnhat.smarthome.security.SecurityUtils;
import com.ldnhat.smarthome.service.FirebaseService;
import com.ldnhat.smarthome.service.SpeechDataService;
import com.ldnhat.smarthome.service.dto.SpeechDataDTO;
import com.ldnhat.smarthome.service.error.UserException;
import com.ldnhat.smarthome.service.mapper.SpeechDataMapper;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.Optional;

/**
 * Service Implementation for managing {@link SpeechData}.
 */
@Service
@Transactional
public class SpeechDataServiceImpl implements SpeechDataService {
    private final Logger log = LoggerFactory.getLogger(SpeechDataServiceImpl.class);

    private final SpeechDataRepository speechDataRepository;

    private final DeviceRepository deviceRepository;

    private final SpeechDataMapper speechDataMapper;

    private final FirebaseService firebaseService;

    private static final String ENTITY_NAME = "SmartHomeServiceSpeechData";

    public SpeechDataServiceImpl(SpeechDataRepository speechDataRepository, DeviceRepository deviceRepository, SpeechDataMapper speechDataMapper, FirebaseService firebaseService) {
        this.speechDataRepository = speechDataRepository;
        this.deviceRepository = deviceRepository;
        this.speechDataMapper = speechDataMapper;
        this.firebaseService = firebaseService;
    }

    @Override
    public SpeechDataDTO save(SpeechDataDTO speechDataDTO) {
        log.debug("Request to save Speech Data : {}", speechDataDTO);
        SpeechData speechData = speechDataMapper.toEntity(speechDataDTO);
        speechData = speechDataRepository.save(speechData);
        return speechDataMapper.toDto(speechData);
    }

    @Override
    @Transactional(readOnly = true)
    public Optional<SpeechDataDTO> findOne(String id) {
        log.debug("Request to get speechData by id : {}", id);
        return speechDataRepository.findById(id).map(speechDataMapper::toDto);
    }

    @Override
    @Transactional(readOnly = true)
    public Page<SpeechDataDTO> findAllByUser(Pageable pageable) {
        log.debug("Request to get all speech data");
        String login = SecurityUtils.getCurrentUserLogin().orElseThrow(() -> new UserException("Unauthorized user", ENTITY_NAME, "usertoken"));
        return speechDataRepository.findAllByCreatedBy(login, pageable).map(speechDataMapper::toDto);
    }

    @Override
    public void delete(String id) {
        speechDataRepository
            .findOneById(id)
            .ifPresent(speechData -> {
                speechDataRepository.delete(speechData);
                log.debug("Deleted Speech Data: {}", speechData);
            });
    }

    @Override
    public Optional<SpeechDataDTO> update(SpeechDataDTO speechDataDTO) {
        return Optional.of(speechDataRepository.findById(speechDataDTO.getId()))
            .filter(Optional::isPresent)
            .map(Optional::get)
            .map(speechData -> {
                speechData.setMessageRequest(speechDataDTO.getMessageRequest());
                speechData.setMessageResponse(speechDataDTO.getMessageResponse());
                speechDataRepository.save(speechData);
                log.debug("Request to update SpeechData : {}", speechDataDTO);
                return speechData;
            }).map(speechDataMapper::toDto);
    }

    @Override
    public Optional<SpeechDataDTO> handleMessageRequest(SpeechDataDTO speechDataDTO) {
        String login = SecurityUtils.getCurrentUserLogin().orElseThrow(() -> new UserException("Unauthorized user", ENTITY_NAME, "usertoken"));
        return Optional
            .of(speechDataRepository.findOneByMessageRequestIgnoreCaseAndCreatedBy(speechDataDTO.getMessageRequest().trim(), login))
            .filter(Optional::isPresent)
            .map(Optional::get)
            .map(speechData -> {
                Optional<Device> existingDevice = deviceRepository.findOneByIdAndCreatedBy(speechData.getDevice().getId(), login);
                existingDevice.ifPresent(device -> {
                    device.setDeviceAction(speechData.getDevice().getDeviceAction());
                    deviceRepository.save(device);
                    firebaseService.updateDeviceControl(login, device.getDeviceAction().toString(), device.getId());
                });
                log.debug("Request to handle message request");
                return speechData;
            })
            .map(speechDataMapper::toDto);
    }
}
