package com.ldnhat.smarthome.service;

import com.ldnhat.smarthome.service.dto.DeviceTokenDTO;

/**
 * Service Interface for managing {@link com.ldnhat.smarthome.domain.DeviceToken}.
 */
public interface DeviceTokenService {
    /**
     * Save a device token.
     *
     * @param deviceTokenDTO the entity to save.
     * @return the persisted entity.
     */
    DeviceTokenDTO save(DeviceTokenDTO deviceTokenDTO);
}
