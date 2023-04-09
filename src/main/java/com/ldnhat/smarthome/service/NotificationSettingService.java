package com.ldnhat.smarthome.service;

import com.ldnhat.smarthome.service.dto.NotificationSettingDTO;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

/**
 * Service Interface for managing {@link com.ldnhat.smarthome.domain.NotificationSetting}.
 */
public interface NotificationSettingService {
    /**
     * Save a notificationSetting.
     *
     * @param notificationSettingDTO the entity to save.
     * @return the persisted entity.
     */
    NotificationSettingDTO save(NotificationSettingDTO notificationSettingDTO);

    /**
     * Test send a notificationSetting.
     *
     * @param notificationSettingDTO the entity to test.
     * @param deviceId               the deviceId to test.
     */
    void test(NotificationSettingDTO notificationSettingDTO, String deviceId);

    /**
     * Get all notification setting by current device.
     *
     * @param pageable the pagination information.
     * @return the list of entities.
     */
    Page<NotificationSettingDTO> findAllByDeviceId(Pageable pageable, String deviceId);

    /**
     * Delete the "id" notificationSetting.
     *
     * @param id the id of the entity.
     */
    void delete(String id);
}
