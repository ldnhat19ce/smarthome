package com.ldnhat.smarthome.schedule;

import com.ldnhat.smarthome.domain.Device;
import com.ldnhat.smarthome.domain.DeviceTimer;
import com.ldnhat.smarthome.repository.DeviceRepository;
import com.ldnhat.smarthome.repository.DeviceTimerRepository;
import com.ldnhat.smarthome.service.FirebaseService;
import java.time.Instant;
import java.time.temporal.ChronoField;
import java.util.List;
import java.util.stream.Collectors;
import org.joda.time.DateTime;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.stereotype.Component;

@Component
public class DeviceTimerSchedule {

    private static final Logger log = LoggerFactory.getLogger(DeviceMonitorSchedule.class);

    private final DeviceTimerRepository deviceTimerRepository;

    private final DeviceRepository deviceRepository;

    private final FirebaseService firebaseService;

    public DeviceTimerSchedule(
        DeviceTimerRepository deviceTimerRepository,
        DeviceRepository deviceRepository,
        FirebaseService firebaseService
    ) {
        this.deviceTimerRepository = deviceTimerRepository;
        this.deviceRepository = deviceRepository;
        this.firebaseService = firebaseService;
    }

    @Scheduled(cron = "0 * * ? * *")
    public void scheduleDeviceTimer() {
        log.debug("Schedule device timers");
        List<DeviceTimer> deviceTimers = deviceTimerRepository.findAllByTimeBetween(
            Instant.now().minusSeconds(new DateTime().getSecondOfMinute()),
            Instant.now().plusSeconds((60 - (new DateTime().getSecondOfMinute() + 1)))
        );
        //        List<DeviceTimer> deviceTimers = deviceTimerRepository.findAllByTime(Instant.now().minusSeconds(new DateTime().getSecondOfMinute()));

        if (!deviceTimers.isEmpty()) {
            System.out.println(deviceTimers);
            List<Device> devices = deviceRepository.findAllByIdIn(
                deviceTimers.stream().map(s -> s.getDevice().getId()).distinct().collect(Collectors.toList())
            );
            devices.forEach(d ->
                deviceTimers.forEach(dt -> {
                    if (d.getId().equals(dt.getDevice().getId())) {
                        d.setDeviceAction(dt.getDeviceAction());
                        deviceRepository.save(d);
                        firebaseService.updateDeviceControl(d.getCreatedBy(), d.getDeviceAction().toString(), d.getId());
                    }
                })
            );
        }
    }
}
