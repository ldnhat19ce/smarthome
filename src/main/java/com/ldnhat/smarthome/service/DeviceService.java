package com.ldnhat.smarthome.service;

import com.ldnhat.smarthome.domain.enumeration.DeviceAction;
import com.ldnhat.smarthome.domain.enumeration.DeviceType;
import com.ldnhat.smarthome.service.dto.DeviceDTO;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

import java.util.Optional;

/**
 * Service Interface for managing {@link com.ldnhat.smarthome.domain.Device}.
 */
public interface DeviceService {
    /**
     * Save a device.
     *
     * @param deviceDTO the entity to save.
     * @return the persisted entity.
     */
    DeviceDTO save(DeviceDTO deviceDTO);

    /**
     * Get the "id" device.
     *
     * @param id the id of the entity.
     * @return the entity.
     */
    Optional<DeviceDTO> findOne(String id);

    /**
     * Get all devices by current user.
     *
     * @param pageable the pagination information.
     * @return the list of entities.
     */
    Page<DeviceDTO> findAllByUser(Pageable pageable, DeviceType deviceType);

    /**
     * Delete the "id" device.
     *
     * @param id the id of the entity.
     */
    void delete(String id);

    /**
     * Updates a device.
     *
     * @param deviceDTO the entity to update.
     * @return the persisted entity.
     */
    Optional<DeviceDTO> update(DeviceDTO deviceDTO);

    /**
     * Updates a state of device.
     *
     * @param id the entity to update.
     * @return the persisted entity.
     */
    Optional<DeviceAction> updateState(String id);
}
