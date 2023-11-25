package com.ldnhat.smarthome.service.impl;

import com.ldnhat.smarthome.domain.Device;
import com.ldnhat.smarthome.domain.News;
import com.ldnhat.smarthome.domain.NotificationSetting;
import com.ldnhat.smarthome.repository.DeviceRepository;
import com.ldnhat.smarthome.repository.NewsRepository;
import com.ldnhat.smarthome.repository.NotificationSettingRepository;
import com.ldnhat.smarthome.security.SecurityUtils;
import com.ldnhat.smarthome.service.FirebaseService;
import com.ldnhat.smarthome.service.NotificationSettingService;
import com.ldnhat.smarthome.service.dto.NotificationSettingDTO;
import com.ldnhat.smarthome.service.error.UserException;
import com.ldnhat.smarthome.service.mapper.NotificationSettingMapper;
import java.util.Optional;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

/**
 * Service Implementation for managing {@link com.ldnhat.smarthome.domain.NotificationSetting}.
 */
@Service
@Transactional
public class NotificationSettingServiceImpl implements NotificationSettingService {

    private final Logger log = LoggerFactory.getLogger(NotificationSettingServiceImpl.class);

    private final NotificationSettingRepository notificationSettingRepository;

    private final NewsRepository newsRepository;

    private final DeviceRepository deviceRepository;

    private final NotificationSettingMapper notificationSettingMapper;

    private final FirebaseService firebaseService;

    private static final String ENTITY_NAME = "userNotificationSetting";

    public NotificationSettingServiceImpl(
        NotificationSettingRepository notificationSettingRepository,
        NewsRepository newsRepository,
        DeviceRepository deviceRepository,
        NotificationSettingMapper notificationSettingMapper,
        FirebaseService firebaseService
    ) {
        this.notificationSettingRepository = notificationSettingRepository;
        this.newsRepository = newsRepository;
        this.deviceRepository = deviceRepository;
        this.notificationSettingMapper = notificationSettingMapper;
        this.firebaseService = firebaseService;
    }

    @Override
    public NotificationSettingDTO save(NotificationSettingDTO notificationSettingDTO) {
        log.debug("Request to save NotificationSetting : {}", notificationSettingDTO);
        NotificationSetting notificationSetting = notificationSettingMapper.toEntity(notificationSettingDTO);
        notificationSetting = notificationSettingRepository.save(notificationSetting);

        Optional<Device> device = deviceRepository.findOneById(notificationSettingDTO.getDeviceDTO().getId());
        if (device.isPresent()) {
            News news = new News();
            news.setMessage("The notification for device " + device.get().getName() + " is created");
            news.setDevice(device.get());
            newsRepository.save(news);
        }

        return notificationSettingMapper.toDto(notificationSetting);
    }

    @Override
    public void test(NotificationSettingDTO notificationSettingDTO, String deviceId) {
        firebaseService.sendNotificationToMulticastToken(notificationSettingDTO, deviceId);
    }

    @Override
    public Page<NotificationSettingDTO> findAllByDeviceId(Pageable pageable, String deviceId) {
        log.debug("Request to get all notification setting");
        String login = SecurityUtils
            .getCurrentUserLogin()
            .orElseThrow(() -> new UserException("Unauthorized user", ENTITY_NAME, "usertoken"));
        return notificationSettingRepository.findAllByDeviceIdAndCreatedBy(deviceId, login, pageable).map(notificationSettingMapper::toDto);
    }

    @Override
    public void delete(String id) {
        String login = SecurityUtils
            .getCurrentUserLogin()
            .orElseThrow(() -> new UserException("Unauthorized user", ENTITY_NAME, "usertoken"));
        notificationSettingRepository
            .findOneByIdAndCreatedBy(id, login)
            .ifPresent(notificationSetting -> {
                notificationSettingRepository.delete(notificationSetting);
                log.debug("Deleted Notification setting: {}", notificationSetting);

                Optional<Device> device = deviceRepository.findOneById(notificationSetting.getDevice().getId());

                if (device.isPresent()) {
                    News news = new News();
                    news.setMessage("The notification for device " + device.get().getName() + " is deleted");
                    news.setDevice(notificationSetting.getDevice());

                    newsRepository.save(news);
                }
            });
    }
}
