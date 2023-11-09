package com.ldnhat.smarthome.schedule;

import com.ldnhat.smarthome.domain.DeviceMonitor;
import com.ldnhat.smarthome.domain.DeviceToken;
import com.ldnhat.smarthome.domain.NotificationSetting;
import com.ldnhat.smarthome.repository.DeviceMonitorRepository;
import com.ldnhat.smarthome.repository.DeviceTokenRepository;
import com.ldnhat.smarthome.repository.NotificationSettingRepository;
import com.ldnhat.smarthome.service.FirebaseService;
import java.math.BigDecimal;
import java.math.RoundingMode;
import java.time.Instant;
import java.time.temporal.ChronoUnit;
import java.util.List;
import java.util.stream.Collectors;
import org.apache.commons.lang3.StringUtils;
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

    private final FirebaseService firebaseService;

    public DeviceMonitorSchedule(
        DeviceMonitorRepository deviceMonitorRepository,
        DeviceTokenRepository deviceTokenRepository,
        NotificationSettingRepository notificationSettingRepository,
        FirebaseService firebaseService
    ) {
        this.deviceMonitorRepository = deviceMonitorRepository;
        this.deviceTokenRepository = deviceTokenRepository;
        this.notificationSettingRepository = notificationSettingRepository;
        this.firebaseService = firebaseService;
    }
    //    @Scheduled(cron = "0 */4 * ? * *")
    //    public void scheduleDeviceMonitor() {
    //        log.debug("Schedule device monitor");
    //        Instant dateFrom = Instant.now().minus(4, ChronoUnit.MINUTES);
    //        Instant dateTo = Instant.now();
    //        List<DeviceMonitor> deviceMonitors = deviceMonitorRepository.findAllByCreatedDateBetween(dateFrom, dateTo);
    //
    //        List<String> userOfDeviceMonitors = deviceMonitors
    //            .stream()
    //            .map(DeviceMonitor::getCreatedBy)
    //            .distinct()
    //            .collect(Collectors.toList());
    //        List<DeviceToken> deviceTokens = deviceTokenRepository.findAllByCreatedByIn(userOfDeviceMonitors);
    //
    //        List<String> deviceIdOfDeviceMonitors = deviceMonitors
    //            .stream()
    //            .map(deviceMonitor -> deviceMonitor.getDevice().getId())
    //            .distinct()
    //            .collect(Collectors.toList());
    //        List<String> deviceMonitorValues = deviceMonitors.stream().map(DeviceMonitor::getValue).distinct().collect(Collectors.toList());
    //
    //        List<NotificationSetting> notificationSettings = notificationSettingRepository.findAllByValueInAndDeviceIdIn(
    //            deviceMonitorValues,
    //            deviceIdOfDeviceMonitors
    //        );
    //
    //        if (!notificationSettings.isEmpty()) {
    //            log.debug("notification setting {}", notificationSettings);
    //            notificationSettings.forEach(notificationSetting -> {
    //                BigDecimal average = new BigDecimal(0);
    //                List<DeviceMonitor> valueOfNotificationSetting = deviceMonitors
    //                    .stream()
    //                    .filter(b -> b.getValue().equals(notificationSetting.getValue()))
    //                    .filter(b -> b.getDevice().getId().equals(notificationSetting.getDevice().getId()))
    //                    .collect(Collectors.toList());
    //                if (!valueOfNotificationSetting.isEmpty()) {
    //                    for (DeviceMonitor deviceMonitor : valueOfNotificationSetting) {
    //                        average = average.add(BigDecimal.valueOf(Double.parseDouble(deviceMonitor.getValue())));
    //                    }
    //                    average = average.divide(BigDecimal.valueOf(valueOfNotificationSetting.size()), RoundingMode.CEILING);
    //                }
    //                log.debug("device monitor {}", valueOfNotificationSetting);
    //                log.debug("average {}", average);
    //                if (StringUtils.split(average.toString(), ".")[0].equals(notificationSetting.getValue())) {
    //                    List<DeviceToken> deviceTokenSendNotification = deviceTokens
    //                        .stream()
    //                        .filter(b -> b.getCreatedBy().equals(notificationSetting.getCreatedBy()))
    //                        .collect(Collectors.toList());
    //                    if (!deviceTokenSendNotification.isEmpty()) {
    //                        log.debug("send notification");
    //                        firebaseService.sendMulticastToken(
    //                            notificationSetting,
    //                            deviceTokenSendNotification.stream().map(DeviceToken::getToken).collect(Collectors.toList())
    //                        );
    //                    }
    //                }
    //            });
    //        }
    //    }
}
