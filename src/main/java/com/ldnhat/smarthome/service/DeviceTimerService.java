package com.ldnhat.smarthome.service;

import com.ldnhat.smarthome.service.dto.DeviceTimerDTO;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

/**
 * Service Interface for managing {@link com.ldnhat.smarthome.domain.DeviceTimer}.
 */
public interface DeviceTimerService {
    /**
     * Save a device timer.
     *
     * @param deviceTimerDTO the entity to save.
     * @return the persisted entity.
     */
    DeviceTimerDTO save(DeviceTimerDTO deviceTimerDTO);

    /**
     * Get all device timer by current device.
     *
     * @param pageable the pagination information.
     * @param deviceId the id of device.
     * @return the list of entities.
     */
    Page<DeviceTimerDTO> findAllByDevice(Pageable pageable, String deviceId);

    /**
     * Delete the "id" device timer.
     *
     * @param id the id of the entity.
     */
    void delete(String id);
}
