package com.ldnhat.smarthome.service.impl;

import com.ldnhat.smarthome.domain.Device;
import com.ldnhat.smarthome.domain.DeviceMonitor;
import com.ldnhat.smarthome.domain.SpeechData;
import com.ldnhat.smarthome.domain.enumeration.DeviceAction;
import com.ldnhat.smarthome.domain.enumeration.DeviceType;
import com.ldnhat.smarthome.repository.DeviceMonitorRepository;
import com.ldnhat.smarthome.repository.DeviceRepository;
import com.ldnhat.smarthome.repository.SpeechDataRepository;
import com.ldnhat.smarthome.security.SecurityUtils;
import com.ldnhat.smarthome.service.DeviceService;
import com.ldnhat.smarthome.service.FirebaseService;
import com.ldnhat.smarthome.service.dto.DeviceDTO;
import com.ldnhat.smarthome.service.error.UserException;
import com.ldnhat.smarthome.service.mapper.DeviceMapper;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Optional;

/**
 * Service Implementation for managing {@link Device}.
 */
@Service
@Transactional
public class DeviceServiceImpl implements DeviceService {
    private final Logger log = LoggerFactory.getLogger(DeviceServiceImpl.class);

    private final DeviceRepository deviceRepository;

    private final SpeechDataRepository speechDataRepository;

    private final DeviceMonitorRepository deviceMonitorRepository;

    private final DeviceMapper deviceMapper;

    private final FirebaseService firebaseService;


    private static final String ENTITY_NAME = "SmartHomeServiceDevice";

    public DeviceServiceImpl(DeviceRepository deviceRepository, SpeechDataRepository speechDataRepository, DeviceMonitorRepository deviceMonitorRepository, DeviceMapper deviceMapper, FirebaseService firebaseService) {
        this.deviceRepository = deviceRepository;
        this.speechDataRepository = speechDataRepository;
        this.deviceMonitorRepository = deviceMonitorRepository;
        this.deviceMapper = deviceMapper;
        this.firebaseService = firebaseService;
    }

    @Override
    public DeviceDTO save(DeviceDTO deviceDTO) {
        log.debug("Request to save Device : {}", deviceDTO);
        Device device = deviceMapper.toEntity(deviceDTO);
        device = deviceRepository.save(device);
        if (device.getDeviceType().equals(DeviceType.CONTROL)) {
            firebaseService.createDeviceControl(device.getCreatedBy(), device.getDeviceAction().toString(), device.getId());
        }
        return deviceMapper.toDto(device);
    }

    @Override
    public Optional<DeviceDTO> findOne(String id) {
        log.debug("Request to get device by id : {}", id);
        return deviceRepository.findById(id).map(deviceMapper::toDto);
    }

    @Override
    @Transactional(readOnly = true)
    public Page<DeviceDTO> findAllByUser(Pageable pageable, DeviceType deviceType) {
        log.debug("Request to get all devices");
        String login = SecurityUtils.getCurrentUserLogin().orElseThrow(() -> new UserException("Unauthorized user", ENTITY_NAME, "usertoken"));
        if (null != deviceType) {
            return deviceRepository.findAllByCreatedByAndDeviceType(login, deviceType, pageable).map(deviceMapper::toDto);
        }
        return deviceRepository.findAllByCreatedBy(login, pageable).map(deviceMapper::toDto);
    }

    @Override
    public void delete(String id) {
        String login = SecurityUtils.getCurrentUserLogin().orElseThrow(() -> new UserException("Unauthorized user", ENTITY_NAME, "usertoken"));

        Optional<Device> existingDevice = deviceRepository.findOneById(id);
        existingDevice.ifPresent(device -> {
            if (device.getDeviceType().equals(DeviceType.CONTROL)) {
                List<SpeechData> speechDataList = speechDataRepository.findAllByDeviceIdAndCreatedBy(device.getId(), login);
                if (!speechDataList.isEmpty()) {
                    speechDataRepository.deleteAll(speechDataList);
                }
            } else if (device.getDeviceType().equals(DeviceType.MONITOR)) {
                List<DeviceMonitor> deviceMonitors = deviceMonitorRepository.findAllByDeviceIdAndCreatedBy(device.getId(), login);
                if (!deviceMonitors.isEmpty()) {
                    deviceMonitorRepository.deleteAll(deviceMonitors);
                }
            }
            deviceRepository.delete(device);
            log.debug("Deleted Device: {}", device);
        });
    }

    @Override
    public Optional<DeviceDTO> update(DeviceDTO deviceDTO) {
        return Optional.of(deviceRepository.findById(deviceDTO.getId()))
            .filter(Optional::isPresent)
            .map(Optional::get)
            .map(device -> {
                device.setName(deviceDTO.getName());
                device.setDeviceAction(deviceDTO.getDeviceAction());
                device.setDeviceType(deviceDTO.getDeviceType());
                deviceRepository.save(device);
                log.debug("Request to update Device : {}", deviceDTO);
                return device;
            }).map(deviceMapper::toDto);
    }

    @Override
    public Optional<DeviceAction> updateState(String id) {
        Optional<Device> existingDevice = Optional.of(deviceRepository.findById(id))
            .filter(Optional::isPresent)
            .map(Optional::get)
            .map(device -> {
                if (device.getDeviceAction().equals(DeviceAction.ON)) {
                    device.setDeviceAction(DeviceAction.OFF);
                } else if (device.getDeviceAction().equals(DeviceAction.OFF)) {
                    device.setDeviceAction(DeviceAction.ON);
                }
                deviceRepository.save(device);
                log.debug("Request to update Device action : {}", device);
                return device;
            });

        String login = SecurityUtils.getCurrentUserLogin().orElseThrow(() -> new UserException("Unauthorized user", ENTITY_NAME, "usertoken"));
        existingDevice.ifPresent(device -> firebaseService.updateDeviceControl(login, device.getDeviceAction().toString(), device.getId()));

        return Optional.of(existingDevice)
            .filter(Optional::isPresent)
            .map(Optional::get)
            .map(Device::getDeviceAction);
    }
}
