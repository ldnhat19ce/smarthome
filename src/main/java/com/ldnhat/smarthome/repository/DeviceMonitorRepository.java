package com.ldnhat.smarthome.repository;

import com.ldnhat.smarthome.domain.DeviceMonitor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface DeviceMonitorRepository extends MongoRepository<DeviceMonitor, String> {
    Page<DeviceMonitor> findAllByDeviceIdAndCreatedBy(String deviceId, String login, Pageable pageable);

    boolean existsByDeviceIdAndCreatedBy(String deviceId, String login);

    List<DeviceMonitor> findAllByDeviceIdAndCreatedBy(String deviceId, String login);
}
