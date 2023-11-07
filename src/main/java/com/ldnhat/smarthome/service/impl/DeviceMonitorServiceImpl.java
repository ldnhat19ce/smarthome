package com.ldnhat.smarthome.service.impl;

import com.ldnhat.smarthome.domain.Device;
import com.ldnhat.smarthome.domain.DeviceMonitor;
import com.ldnhat.smarthome.repository.DeviceMonitorRepository;
import com.ldnhat.smarthome.security.SecurityUtils;
import com.ldnhat.smarthome.service.DeviceMonitorService;
import com.ldnhat.smarthome.service.FirebaseService;
import com.ldnhat.smarthome.service.dto.DateMonthDTO;
import com.ldnhat.smarthome.service.dto.DeviceMonitorDTO;
import com.ldnhat.smarthome.service.error.UserException;
import com.ldnhat.smarthome.service.mapper.DeviceMonitorMapper;
import com.ldnhat.smarthome.utils.DateUtils;
import java.text.DecimalFormat;
import java.time.Instant;
import java.util.*;
import java.util.concurrent.CompletableFuture;
import java.util.concurrent.ExecutionException;
import org.apache.commons.lang3.StringUtils;
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

        deviceMonitor.setMonth(DateUtils.getCurrentMonth());
        System.out.println(DateUtils.getCurrentMonth());
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
        Instant insTo;

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

    @Override
    public List<DeviceMonitorDTO> statisticalDeviceMonitorInYear(String deviceId) throws ExecutionException, InterruptedException {
        log.debug("Request to statistical device monitor in year by device id : {}", deviceId);
        long start = System.currentTimeMillis();
        List<DateMonthDTO> listMonth = DateUtils.getListMonthOfTheYear();
        List<DeviceMonitorDTO> deviceMonitorDTOs = new ArrayList<>();

        CompletableFuture<List<DeviceMonitor>> completableFuture1 = CompletableFuture.completedFuture(
            deviceMonitorRepository.findAllByDeviceIdAndCreatedDateBetweenOrderByCreatedDateAsc(
                deviceId,
                listMonth.get(0).getDateFrom(),
                listMonth.get(0).getDateTo()
            )
        );
        CompletableFuture<List<DeviceMonitor>> completableFuture2 = CompletableFuture.completedFuture(
            deviceMonitorRepository.findAllByDeviceIdAndCreatedDateBetweenOrderByCreatedDateAsc(
                deviceId,
                listMonth.get(1).getDateFrom(),
                listMonth.get(1).getDateTo()
            )
        );
        CompletableFuture<List<DeviceMonitor>> completableFuture3 = CompletableFuture.completedFuture(
            deviceMonitorRepository.findAllByDeviceIdAndCreatedDateBetweenOrderByCreatedDateAsc(
                deviceId,
                listMonth.get(2).getDateFrom(),
                listMonth.get(2).getDateTo()
            )
        );
        CompletableFuture<List<DeviceMonitor>> completableFuture4 = CompletableFuture.completedFuture(
            deviceMonitorRepository.findAllByDeviceIdAndCreatedDateBetweenOrderByCreatedDateAsc(
                deviceId,
                listMonth.get(3).getDateFrom(),
                listMonth.get(3).getDateTo()
            )
        );
        CompletableFuture<List<DeviceMonitor>> completableFuture5 = CompletableFuture.completedFuture(
            deviceMonitorRepository.findAllByDeviceIdAndCreatedDateBetweenOrderByCreatedDateAsc(
                deviceId,
                listMonth.get(4).getDateFrom(),
                listMonth.get(4).getDateTo()
            )
        );
        CompletableFuture<List<DeviceMonitor>> completableFuture6 = CompletableFuture.completedFuture(
            deviceMonitorRepository.findAllByDeviceIdAndCreatedDateBetweenOrderByCreatedDateAsc(
                deviceId,
                listMonth.get(5).getDateFrom(),
                listMonth.get(5).getDateTo()
            )
        );
        CompletableFuture<List<DeviceMonitor>> completableFuture7 = CompletableFuture.completedFuture(
            deviceMonitorRepository.findAllByDeviceIdAndCreatedDateBetweenOrderByCreatedDateAsc(
                deviceId,
                listMonth.get(6).getDateFrom(),
                listMonth.get(6).getDateTo()
            )
        );
        CompletableFuture<List<DeviceMonitor>> completableFuture8 = CompletableFuture.completedFuture(
            deviceMonitorRepository.findAllByDeviceIdAndCreatedDateBetweenOrderByCreatedDateAsc(
                deviceId,
                listMonth.get(7).getDateFrom(),
                listMonth.get(7).getDateTo()
            )
        );
        CompletableFuture<List<DeviceMonitor>> completableFuture9 = CompletableFuture.completedFuture(
            deviceMonitorRepository.findAllByDeviceIdAndCreatedDateBetweenOrderByCreatedDateAsc(
                deviceId,
                listMonth.get(8).getDateFrom(),
                listMonth.get(8).getDateTo()
            )
        );
        CompletableFuture<List<DeviceMonitor>> completableFuture10 = CompletableFuture.completedFuture(
            deviceMonitorRepository.findAllByDeviceIdAndCreatedDateBetweenOrderByCreatedDateAsc(
                deviceId,
                listMonth.get(9).getDateFrom(),
                listMonth.get(9).getDateTo()
            )
        );
        CompletableFuture<List<DeviceMonitor>> completableFuture11 = CompletableFuture.completedFuture(
            deviceMonitorRepository.findAllByDeviceIdAndCreatedDateBetweenOrderByCreatedDateAsc(
                deviceId,
                listMonth.get(10).getDateFrom(),
                listMonth.get(10).getDateTo()
            )
        );
        CompletableFuture<List<DeviceMonitor>> completableFuture12 = CompletableFuture.completedFuture(
            deviceMonitorRepository.findAllByDeviceIdAndCreatedDateBetweenOrderByCreatedDateAsc(
                deviceId,
                listMonth.get(11).getDateFrom(),
                listMonth.get(11).getDateTo()
            )
        );

        CompletableFuture
            .allOf(
                completableFuture1,
                completableFuture2,
                completableFuture3,
                completableFuture4,
                completableFuture5,
                completableFuture6,
                completableFuture7,
                completableFuture8,
                completableFuture9,
                completableFuture10,
                completableFuture11,
                completableFuture12
            )
            .join();

        addListDeviceMonitor(deviceMonitorDTOs, completableFuture1);
        addListDeviceMonitor(deviceMonitorDTOs, completableFuture2);
        addListDeviceMonitor(deviceMonitorDTOs, completableFuture3);
        addListDeviceMonitor(deviceMonitorDTOs, completableFuture4);
        addListDeviceMonitor(deviceMonitorDTOs, completableFuture5);
        addListDeviceMonitor(deviceMonitorDTOs, completableFuture6);
        addListDeviceMonitor(deviceMonitorDTOs, completableFuture7);
        addListDeviceMonitor(deviceMonitorDTOs, completableFuture8);
        addListDeviceMonitor(deviceMonitorDTOs, completableFuture9);
        addListDeviceMonitor(deviceMonitorDTOs, completableFuture10);
        addListDeviceMonitor(deviceMonitorDTOs, completableFuture11);
        addListDeviceMonitor(deviceMonitorDTOs, completableFuture12);

        long end = System.currentTimeMillis();
        log.debug("Estimated time: " + (end - start) + "ms");
        return deviceMonitorDTOs;
    }

    private void addListDeviceMonitor(
        List<DeviceMonitorDTO> deviceMonitorDTOs,
        CompletableFuture<List<DeviceMonitor>> listCompletableFuture
    ) throws ExecutionException, InterruptedException {
        if (!listCompletableFuture.get().isEmpty()) {
            deviceMonitorDTOs.addAll(deviceMonitorMapper.toDto(listCompletableFuture.get()));
        }
    }

    @Override
    public void dummyData(String deviceId, Integer month) {
        List<DeviceMonitor> deviceMonitors = new ArrayList<>();

        //        for (Integer month : listMonth) {

        for (Integer day : listDay) {
            for (Integer hour : listHour) {
                for (Integer minute : listMinute) {
                    for (Integer second : listSecond) {
                        DeviceMonitor deviceMonitor = new DeviceMonitor();
                        deviceMonitor.setMonth(String.valueOf(month + 1));
                        deviceMonitor.setUnitMeasure("°C");

                        Device device = new Device();
                        device.setId(deviceId);
                        deviceMonitor.setDevice(device);

                        if (StringUtils.equalsAny(month.toString(), "0", "1", "2")) {
                            deviceMonitor.setValue(getRandomValue(21.0, 27.0));
                        } else if (StringUtils.equalsAny(month.toString(), "3", "4")) {
                            deviceMonitor.setValue(getRandomValue(25.0, 33.0));
                        } else if (StringUtils.equalsAny(month.toString(), "5", "6", "7")) {
                            deviceMonitor.setValue(getRandomValue(28.0, 38.0));
                        } else if (StringUtils.equalsAny(month.toString(), "8", "9")) {
                            deviceMonitor.setValue(getRandomValue(24.0, 33.0));
                        } else if (StringUtils.equalsAny(month.toString(), "10", "11")) {
                            deviceMonitor.setValue(getRandomValue(18.0, 25.0));
                        }

                        Calendar calendar = Calendar.getInstance();
                        calendar.setTime(new Date());
                        calendar.set(Calendar.MONTH, month);

                        calendar.set(Calendar.DAY_OF_MONTH, day);
                        calendar.set(Calendar.HOUR_OF_DAY, hour);
                        calendar.set(Calendar.MINUTE, minute);
                        calendar.set(Calendar.SECOND, second);

                        deviceMonitor.setCreatedDate(calendar.toInstant());
                        deviceMonitor.setCreatedBy("user");
                        deviceMonitor.setLastModifiedDate(calendar.toInstant());
                        deviceMonitor.setLastModifiedBy("user");

                        deviceMonitors.add(deviceMonitor);
                    }
                }
            }
        }
        //        }

        deviceMonitorRepository.saveAll(deviceMonitors);
    }

    //    private static final List<Integer> listSecond = Arrays.asList(0, 5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 55, 59);
    private static final List<Integer> listSecond = Arrays.asList(0, 10, 20, 30, 40, 50, 59);
    private static final List<Integer> listMinute = Arrays.asList(
        0,
        1,
        2,
        3,
        4,
        5,
        6,
        7,
        8,
        9,
        10,
        11,
        12,
        13,
        14,
        15,
        16,
        17,
        18,
        19,
        20,
        21,
        22,
        23,
        24,
        25,
        26,
        27,
        28,
        29,
        30,
        31,
        32,
        33,
        34,
        35,
        36,
        37,
        38,
        39,
        40,
        41,
        42,
        43,
        44,
        45,
        46,
        47,
        48,
        49,
        50,
        51,
        52,
        53,
        54,
        55,
        56,
        57,
        58,
        59
    );
    private static final List<Integer> listHour = Arrays.asList(
        0,
        1,
        2,
        3,
        4,
        5,
        6,
        7,
        8,
        9,
        10,
        11,
        12,
        13,
        14,
        15,
        16,
        17,
        18,
        19,
        20,
        21,
        22,
        23
    );
    private static final List<Integer> listMonth = Arrays.asList(0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11);
    private static final List<Integer> listDay = Arrays.asList(
        1,
        2,
        3,
        4,
        5,
        6,
        7,
        8,
        9,
        10,
        11,
        12,
        13,
        14,
        15,
        16,
        17,
        18,
        19,
        20,
        21,
        22,
        23,
        24,
        25,
        26,
        27,
        28,
        29,
        30,
        31
    );

    private String getRandomValue(double min, double max) {
        DecimalFormat df = new DecimalFormat("00.0");
        return df.format(Math.random() * (max - min) + min);
    }
}
