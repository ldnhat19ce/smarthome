package com.ldnhat.smarthome.service.impl;

import com.ldnhat.smarthome.domain.DeviceMonitor;
import com.ldnhat.smarthome.repository.DeviceMonitorRepository;
import com.ldnhat.smarthome.security.SecurityUtils;
import com.ldnhat.smarthome.service.DeviceMonitorService;
import com.ldnhat.smarthome.service.dto.DeviceMonitorDTO;
import com.ldnhat.smarthome.service.error.UserException;
import com.ldnhat.smarthome.service.mapper.DeviceMonitorMapper;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.Optional;

/**
 * Service Implementation for managing {@link DeviceMonitor}.
 */
@Service
@Transactional
public class DeviceMonitorServiceImpl implements DeviceMonitorService {
    private final Logger log = LoggerFactory.getLogger(DeviceMonitorServiceImpl.class);

    private final DeviceMonitorRepository deviceMonitorRepository;

    private final DeviceMonitorMapper deviceMonitorMapper;

    private static final String ENTITY_NAME = "userDeviceMonitor";

    public DeviceMonitorServiceImpl(DeviceMonitorRepository deviceMonitorRepository, DeviceMonitorMapper deviceMonitorMapper) {
        this.deviceMonitorRepository = deviceMonitorRepository;
        this.deviceMonitorMapper = deviceMonitorMapper;
    }

    @Override
    public DeviceMonitorDTO save(DeviceMonitorDTO deviceMonitorDTO) {
        log.debug("Request to save Device Monitor : {}", deviceMonitorDTO);
        DeviceMonitor deviceMonitor = deviceMonitorMapper.toEntity(deviceMonitorDTO);
        deviceMonitor = deviceMonitorRepository.save(deviceMonitor);
        return deviceMonitorMapper.toDto(deviceMonitor);
    }

    @Override
    public Optional<DeviceMonitorDTO> findOne(String id) {
        log.debug("Request to get device monitor by id : {}", id);
        return deviceMonitorRepository.findById(id).map(deviceMonitorMapper::toDto);
    }

    @Override
    public Page<DeviceMonitorDTO> findAllByDevice(Pageable pageable, String deviceId) {
        log.debug("Request to get all device monitor");
        String login = SecurityUtils.getCurrentUserLogin().orElseThrow(() -> new UserException("Unauthorized user", ENTITY_NAME, "usertoken"));
        return deviceMonitorRepository.findAllByDeviceIdAndCreatedBy(deviceId, login, pageable).map(deviceMonitorMapper::toDto);
    }

    @Override
    public void delete(String id) {

    }
}
