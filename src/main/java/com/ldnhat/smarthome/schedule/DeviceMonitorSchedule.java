package com.ldnhat.smarthome.schedule;

import com.ldnhat.smarthome.domain.DeviceMonitor;
import com.ldnhat.smarthome.domain.DeviceToken;
import com.ldnhat.smarthome.domain.News;
import com.ldnhat.smarthome.domain.NotificationSetting;
import com.ldnhat.smarthome.repository.DeviceMonitorRepository;
import com.ldnhat.smarthome.repository.DeviceTokenRepository;
import com.ldnhat.smarthome.repository.NewsRepository;
import com.ldnhat.smarthome.repository.NotificationSettingRepository;
import com.ldnhat.smarthome.service.FirebaseService;
import java.math.BigDecimal;
import java.time.LocalDateTime;
import java.time.temporal.ChronoUnit;
import java.util.List;
import java.util.stream.Collectors;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.stereotype.Component;

@Component
public class DeviceMonitorSchedule {

    private static final Logger log = LoggerFactory.getLogger(DeviceMonitorSchedule.class);

    private final DeviceMonitorRepository deviceMonitorRepository;

    private final DeviceTokenRepository deviceTokenRepository;

    private final NotificationSettingRepository notificationSettingRepository;

    private final NewsRepository newsRepository;

    private final FirebaseService firebaseService;

    public DeviceMonitorSchedule(
        DeviceMonitorRepository deviceMonitorRepository,
        DeviceTokenRepository deviceTokenRepository,
        NotificationSettingRepository notificationSettingRepository,
        NewsRepository newsRepository,
        FirebaseService firebaseService
    ) {
        this.deviceMonitorRepository = deviceMonitorRepository;
        this.deviceTokenRepository = deviceTokenRepository;
        this.notificationSettingRepository = notificationSettingRepository;
        this.newsRepository = newsRepository;
        this.firebaseService = firebaseService;
    }

    @Scheduled(cron = "0 */4 * ? * *")
    public void scheduleDeviceMonitor() {
        log.debug("Schedule device monitor");
        LocalDateTime dateTo = LocalDateTime.now();
        LocalDateTime dateFrom = dateTo.minus(4, ChronoUnit.MINUTES);

        List<DeviceMonitor> deviceMonitors = deviceMonitorRepository.findAllByCreatedDateBetween(dateFrom, dateTo);

        List<String> userOfDeviceMonitors = deviceMonitors
            .stream()
            .map(DeviceMonitor::getCreatedBy)
            .distinct()
            .collect(Collectors.toList());

        List<DeviceToken> deviceTokens = deviceTokenRepository.findAllByCreatedByIn(userOfDeviceMonitors);

        List<String> deviceIdOfDeviceMonitors = deviceMonitors
            .stream()
            .map(deviceMonitor -> deviceMonitor.getDevice().getId())
            .distinct()
            .collect(Collectors.toList());

        List<NotificationSetting> notificationSettings = notificationSettingRepository.findAllByDeviceIdIn(deviceIdOfDeviceMonitors);

        if (!notificationSettings.isEmpty()) {
            log.debug("notification setting {}", notificationSettings);
            notificationSettings.forEach(notificationSetting -> {
                List<DeviceMonitor> valueOfNotificationSetting = deviceMonitors
                    .stream()
                    .filter(b -> {
                        BigDecimal value1 = new BigDecimal(b.getValue());
                        BigDecimal value2 = new BigDecimal(notificationSetting.getValue());
                        return value1.compareTo(value2) == 0;
                    })
                    .filter(b -> b.getDevice().getId().equals(notificationSetting.getDevice().getId()))
                    .collect(Collectors.toList());

                if (!valueOfNotificationSetting.isEmpty()) {
                    firebaseService.updateNotificationSetting(
                        notificationSetting.getCreatedBy(),
                        notificationSetting.getDevice().getId(),
                        notificationSetting.getTitle(),
                        notificationSetting.getMessage()
                    );

                    saveNews(notificationSetting);

                    List<DeviceToken> deviceTokenSendNotification = deviceTokens
                        .stream()
                        .filter(b -> b.getCreatedBy().equals(notificationSetting.getCreatedBy()))
                        .collect(Collectors.toList());

                    if (!deviceTokenSendNotification.isEmpty()) {
                        sendToken(notificationSetting, deviceTokenSendNotification);
                    }
                }
            });
        }
    }

    private void saveNews(NotificationSetting notificationSetting) {
        News news = new News();
        news.setMessage(notificationSetting.getMessage());
        news.setDevice(notificationSetting.getDevice());

        newsRepository.save(news);
    }

    private void sendToken(NotificationSetting notificationSetting, List<DeviceToken> deviceTokenSendNotification) {
        firebaseService.sendMulticastToken(
            notificationSetting,
            deviceTokenSendNotification.stream().map(DeviceToken::getToken).collect(Collectors.toList())
        );
    }
}
