package com.ldnhat.smarthome.service.impl;

import com.ldnhat.smarthome.domain.DeviceMonitor;
import com.ldnhat.smarthome.repository.DeviceMonitorRepository;
import com.ldnhat.smarthome.security.SecurityUtils;
import com.ldnhat.smarthome.service.DeviceMonitorService;
import com.ldnhat.smarthome.service.FirebaseService;
import com.ldnhat.smarthome.service.dto.DeviceMonitorDTO;
import com.ldnhat.smarthome.service.error.UserException;
import com.ldnhat.smarthome.service.mapper.DeviceMonitorMapper;
import com.ldnhat.smarthome.utils.DateUtils;
import java.time.Instant;
import java.util.Date;
import java.util.List;
import java.util.Optional;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

/**
 * Service Implementation for managing {@link DeviceMonitor}.
 */
@Service
@Transactional
public class DeviceMonitorServiceImpl implements DeviceMonitorService {

    private final Logger log = LoggerFactory.getLogger(DeviceMonitorServiceImpl.class);

    private final DeviceMonitorRepository deviceMonitorRepository;

    private final DeviceMonitorMapper deviceMonitorMapper;

    private final FirebaseService firebaseService;

    private static final String ENTITY_NAME = "userDeviceMonitor";

    public DeviceMonitorServiceImpl(
        DeviceMonitorRepository deviceMonitorRepository,
        DeviceMonitorMapper deviceMonitorMapper,
        FirebaseService firebaseService
    ) {
        this.deviceMonitorRepository = deviceMonitorRepository;
        this.deviceMonitorMapper = deviceMonitorMapper;
        this.firebaseService = firebaseService;
    }

    @Override
    public DeviceMonitorDTO save(DeviceMonitorDTO deviceMonitorDTO) {
        log.debug("Request to save Device Monitor : {}", deviceMonitorDTO);
        DeviceMonitor deviceMonitor = deviceMonitorMapper.toEntity(deviceMonitorDTO);
        deviceMonitor = deviceMonitorRepository.save(deviceMonitor);

        firebaseService.updateDeviceMonitor(
            deviceMonitor.getCreatedBy(),
            deviceMonitor.getValue(),
            deviceMonitor.getUnitMeasure(),
            deviceMonitor.getDevice().getId()
        );
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
        String login = SecurityUtils
            .getCurrentUserLogin()
            .orElseThrow(() -> new UserException("Unauthorized user", ENTITY_NAME, "usertoken"));
        return deviceMonitorRepository.findAllByDeviceIdAndCreatedBy(deviceId, login, pageable).map(deviceMonitorMapper::toDto);
    }

    @Override
    public void delete(String id) {}

    @Override
    public Optional<DeviceMonitorDTO> getRangeDeviceMonitor(String id) {
        log.debug("Request to get range device monitor by id : {}", id);
        Date date = new Date();

        Optional<DeviceMonitor> maxValue = deviceMonitorRepository.findFirstByDeviceIdAndCreatedDateBetweenOrderByValueDesc(
            id,
            DateUtils.atStartOfDay(date).toInstant(),
            DateUtils.atEndOfDay(date).toInstant()
        );
        Optional<DeviceMonitor> minValue = deviceMonitorRepository.findFirstByDeviceIdAndCreatedDateBetweenOrderByValueAsc(
            id,
            DateUtils.atStartOfDay(date).toInstant(),
            DateUtils.atEndOfDay(date).toInstant()
        );

        DeviceMonitorDTO deviceMonitorDTO = new DeviceMonitorDTO();
        deviceMonitorDTO.setMaxValue(maxValue.isPresent() ? maxValue.get().getValue() : "0");
        deviceMonitorDTO.setMinValue(minValue.isPresent() ? minValue.get().getValue() : "0");

        return Optional.of(deviceMonitorDTO);
    }

    @Override
    public List<DeviceMonitorDTO> findAllDeviceMonitoryByDeviceIdAndType(String deviceId, String type) {
        log.debug("Request to get range device monitor by device id : {} and type : {}", deviceId, type);
        Date dateFrom = new Date();
        Date dateTo = new Date();
        Instant insFrom = Instant.now();
        Instant insTo = Instant.now();

        if (type.equals("0")) {
            return deviceMonitorMapper.toDto(deviceMonitorRepository.findAllByDeviceIdOrderByCreatedDateAsc(deviceId));
        }

        insTo = DateUtils.atEndOfDay(dateTo).toInstant();
        switch (type) {
            case "1":
                // Today
                insFrom = DateUtils.atStartOfDay(dateFrom).toInstant();
                break;
            case "2":
                // 7 days ago
                insFrom = DateUtils.minusDays(dateFrom, 5).toInstant();
                break;
            case "3":
                // Current month
                insFrom = DateUtils.firstDayOfMonth(dateFrom).toInstant();
                insTo = DateUtils.lastDayOfMonth(dateTo).toInstant();
                break;
            case "4":
                // Last month
                insFrom = DateUtils.firstDayOfPreviousMonth(dateFrom).toInstant();
                insTo = DateUtils.lastDayOfPreviousMonth(dateTo).toInstant();
                break;
            case "5":
                // 3 months ago
                insFrom = DateUtils.firstDayOfPreviousMonth(dateFrom, 3).toInstant();
                //                insTo = DateUtils.lastDayOfPreviousMonth(dateTo, 3).toInstant();
                break;
            case "6":
                // 6 months ago
                insFrom = DateUtils.firstDayOfPreviousMonth(dateFrom, 6).toInstant();
                //                insTo = DateUtils.lastDayOfPreviousMonth(dateTo, 6).toInstant();
                break;
            case "7":
                // 1 year ago
                insFrom = DateUtils.firstDayOfPreviousMonth(dateFrom, 12).toInstant();
                //                insTo = DateUtils.lastDayOfPreviousMonth(dateTo, 12).toInstant();
                break;
        }

        log.debug("Search Date From: {}", insFrom);
        log.debug("Search Date to: {}", insTo);

        return deviceMonitorMapper.toDto(
            deviceMonitorRepository.findAllByDeviceIdAndCreatedDateBetweenOrderByCreatedDateAsc(deviceId, insFrom, insTo)
        );
    }
}
