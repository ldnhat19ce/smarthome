package com.ldnhat.smarthome.service.impl;

import com.ldnhat.smarthome.domain.NotificationSetting;
import com.ldnhat.smarthome.repository.NotificationSettingRepository;
import com.ldnhat.smarthome.security.SecurityUtils;
import com.ldnhat.smarthome.service.FirebaseService;
import com.ldnhat.smarthome.service.NotificationSettingService;
import com.ldnhat.smarthome.service.dto.NotificationSettingDTO;
import com.ldnhat.smarthome.service.error.UserException;
import com.ldnhat.smarthome.service.mapper.NotificationSettingMapper;
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

    private final NotificationSettingMapper notificationSettingMapper;

    private final FirebaseService firebaseService;

    private static final String ENTITY_NAME = "userNotificationSetting";

    public NotificationSettingServiceImpl(
        NotificationSettingRepository notificationSettingRepository,
        NotificationSettingMapper notificationSettingMapper,
        FirebaseService firebaseService
    ) {
        this.notificationSettingRepository = notificationSettingRepository;
        this.notificationSettingMapper = notificationSettingMapper;
        this.firebaseService = firebaseService;
    }

    @Override
    public NotificationSettingDTO save(NotificationSettingDTO notificationSettingDTO) {
        log.debug("Request to save NotificationSetting : {}", notificationSettingDTO);
        NotificationSetting notificationSetting = notificationSettingMapper.toEntity(notificationSettingDTO);
        notificationSetting = notificationSettingRepository.save(notificationSetting);
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
            });
    }
}
