package com.ldnhat.smarthome.service.impl;

import com.ldnhat.smarthome.domain.DeviceTimer;
import com.ldnhat.smarthome.repository.DeviceTimerRepository;
import com.ldnhat.smarthome.security.SecurityUtils;
import com.ldnhat.smarthome.service.DeviceTimerService;
import com.ldnhat.smarthome.service.dto.DeviceTimerDTO;
import com.ldnhat.smarthome.service.error.TimeAlreadyUsedException;
import com.ldnhat.smarthome.service.error.UserException;
import com.ldnhat.smarthome.service.mapper.DeviceTimerMapper;
import java.time.Instant;
import java.util.List;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

/**
 * Service Implementation for managing {@link com.ldnhat.smarthome.domain.DeviceTimer}.
 */
@Service
@Transactional
public class DeviceTimerServiceImpl implements DeviceTimerService {

    private final Logger log = LoggerFactory.getLogger(DeviceTimerServiceImpl.class);

    private final DeviceTimerRepository deviceTimerRepository;

    private final DeviceTimerMapper deviceTimerMapper;

    private static final String ENTITY_NAME = "userDeviceTimer";

    public DeviceTimerServiceImpl(DeviceTimerRepository deviceTimerRepository, DeviceTimerMapper deviceTimerMapper) {
        this.deviceTimerRepository = deviceTimerRepository;
        this.deviceTimerMapper = deviceTimerMapper;
    }

    @Override
    public DeviceTimerDTO save(DeviceTimerDTO deviceTimerDTO) {
        log.debug("Request to save deviceTimer {}", deviceTimerDTO);

        String login = SecurityUtils
            .getCurrentUserLogin()
            .orElseThrow(() -> new UserException("Unauthorized user", ENTITY_NAME, "usertoken"));
        List<DeviceTimer> deviceTimers = deviceTimerRepository.findAllByDeviceIdAndCreatedBy(deviceTimerDTO.getDeviceDTO().getId(), login);
        deviceTimers.forEach(b -> {
            // check if range startTime and endTime have no action
            if (
                isContains(deviceTimerDTO.getStartTime(), b.getStartTime(), b.getEndTime()) ||
                isContains(deviceTimerDTO.getEndTime(), b.getStartTime(), b.getEndTime())
            ) {
                throw new TimeAlreadyUsedException("Time already used", ENTITY_NAME, "timealreadyused");
            }
        });
        DeviceTimer deviceTimer = deviceTimerMapper.toEntity(deviceTimerDTO);
        deviceTimer = deviceTimerRepository.save(deviceTimer);
        return deviceTimerMapper.toDto(deviceTimer);
    }

    private boolean isContains(Instant sourceDate, Instant startTime, Instant endTime) {
        return sourceDate.isAfter(startTime) && sourceDate.isBefore(endTime);
    }

    @Override
    public Page<DeviceTimerDTO> findAllByDevice(Pageable pageable, String deviceId) {
        log.debug("Request to get all device timer");
        String login = SecurityUtils
            .getCurrentUserLogin()
            .orElseThrow(() -> new UserException("Unauthorized user", ENTITY_NAME, "usertoken"));
        return deviceTimerRepository.findAllByDeviceIdAndCreatedBy(deviceId, login, pageable).map(deviceTimerMapper::toDto);
    }

    @Override
    public void delete(String id) {
        deviceTimerRepository
            .findOneById(id)
            .ifPresent(deviceTimer -> {
                deviceTimerRepository.delete(deviceTimer);
                log.debug("Deleted Device timer: {}", deviceTimer);
            });
    }
}
