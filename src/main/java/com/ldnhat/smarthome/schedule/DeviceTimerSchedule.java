package com.ldnhat.smarthome.schedule;

import com.ldnhat.smarthome.domain.Device;
import com.ldnhat.smarthome.domain.DeviceTimer;
import com.ldnhat.smarthome.domain.News;
import com.ldnhat.smarthome.repository.DeviceRepository;
import com.ldnhat.smarthome.repository.DeviceTimerRepository;
import com.ldnhat.smarthome.repository.NewsRepository;
import com.ldnhat.smarthome.service.FirebaseService;
import java.time.Instant;
import java.time.LocalDateTime;
import java.time.temporal.ChronoField;
import java.time.temporal.ChronoUnit;
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

    private final NewsRepository newsRepository;

    private final FirebaseService firebaseService;

    public DeviceTimerSchedule(
        DeviceTimerRepository deviceTimerRepository,
        DeviceRepository deviceRepository,
        NewsRepository newsRepository,
        FirebaseService firebaseService
    ) {
        this.deviceTimerRepository = deviceTimerRepository;
        this.deviceRepository = deviceRepository;
        this.newsRepository = newsRepository;
        this.firebaseService = firebaseService;
    }

    @Scheduled(cron = "0 * * ? * *")
    public void scheduleDeviceTimer() {
        log.debug("Schedule device timers");
        LocalDateTime dateFrom = LocalDateTime.now();
        LocalDateTime dateTo = dateFrom.plus(59, ChronoUnit.SECONDS);
        System.out.println(dateFrom);
        System.out.println(dateTo);
        List<DeviceTimer> deviceTimers = deviceTimerRepository.findAllByTimeBetween(dateFrom, dateTo);

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

                        News news = new News();
                        news.setDevice(d);
                        news.setMessage(d.getName() + " has been updated successfully");
                        newsRepository.save(news);
                    }
                })
            );
        }
    }
}
