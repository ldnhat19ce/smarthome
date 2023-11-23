package com.ldnhat.smarthome.service;

import com.ldnhat.smarthome.service.dto.DeviceMonitorDTO;
import com.ldnhat.smarthome.service.dto.StatisticalDeviceMonitorDTO;
import java.util.List;
import java.util.Optional;
import java.util.concurrent.ExecutionException;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

/**
 * Service Interface for managing {@link com.ldnhat.smarthome.domain.DeviceMonitor}.
 */
public interface DeviceMonitorService {
    /**
     * Save a device monitor.
     *
     * @param deviceMonitorDTO the entity to save.
     * @return the persisted entity.
     */
    DeviceMonitorDTO save(DeviceMonitorDTO deviceMonitorDTO);

    /**
     * Get the "id" device monitor.
     *
     * @param id the id of the entity.
     * @return the entity.
     */
    Optional<DeviceMonitorDTO> findOne(String id);

    /**
     * Get all device monitor by current device.
     *
     * @param pageable the pagination information.
     * @param deviceId the id of device.
     * @return the list of entities.
     */
    Page<DeviceMonitorDTO> findAllByDevice(Pageable pageable, String deviceId);

    /**
     * Delete the "id" device monitor.
     *
     * @param id the id of the entity.
     */
    void delete(String id);

    /**
     * Get range a device monitor.
     *
     * @param id the id of entity.
     * @return the persisted entity.
     */
    Optional<DeviceMonitorDTO> getRangeDeviceMonitor(String id);

    /**
     * Get list device monitor by current device and type.
     *
     * @param deviceId the id of device.
     * @param type     (0 -> 8) type filter.
     * @return the list of entities.
     */
    List<DeviceMonitorDTO> findAllDeviceMonitoryByDeviceIdAndType(String deviceId, String type);

    /**
     * statistical device monitor in year.
     *
     * @param deviceId the id of device.
     * @return the list of entities.
     */
    List<List<StatisticalDeviceMonitorDTO>> statisticalDeviceMonitorInYear(String deviceId) throws ExecutionException, InterruptedException;

    /**
     * statistical device monitor in month.
     *
     * @param deviceId the id of device.
     * @return the list of entities.
     */
    List<StatisticalDeviceMonitorDTO> statisticalDeviceMonitorInMonth(String deviceId) throws ExecutionException;

    /**
     * statistical device monitor in day.
     *
     * @param deviceId the id of device.
     * @return the list of entities.
     */
    List<StatisticalDeviceMonitorDTO> statisticalDeviceMonitorInDay(String deviceId) throws ExecutionException;

    /**
     * statistical device monitor in hour.
     *
     * @param deviceId the id of device.
     * @return the list of entities.
     */
    List<StatisticalDeviceMonitorDTO> statisticalDeviceMonitorInHour(String deviceId) throws ExecutionException;

    /**
     * Dummy data
     *
     * @param deviceId the id of device.
     * @param month    month to dummy
     * @return
     */
    void dummyData(String deviceId, Integer month);

    /**
     * get latest device monitor
     *
     * @return latest entity.
     */
    Optional<DeviceMonitorDTO> getLatestDeviceMonitor();
}
