package com.ldnhat.smarthome.repository;

import com.ldnhat.smarthome.domain.DeviceMonitor;
import java.time.Instant;
import java.util.List;
import java.util.Optional;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface DeviceMonitorRepository extends MongoRepository<DeviceMonitor, String> {
    Page<DeviceMonitor> findAllByDeviceIdAndCreatedBy(String deviceId, String login, Pageable pageable);

    boolean existsByDeviceIdAndCreatedBy(String deviceId, String login);

    List<DeviceMonitor> findAllByDeviceIdAndCreatedBy(String deviceId, String login);

    List<DeviceMonitor> findAllByCreatedDateBetween(Instant dateFrom, Instant dateTo);

    Optional<DeviceMonitor> findFirstByDeviceIdAndCreatedDateBetweenOrderByValueDesc(String deviceId, Instant dateFrom, Instant dateTo);

    Optional<DeviceMonitor> findFirstByDeviceIdAndCreatedDateBetweenOrderByValueAsc(String deviceId, Instant dateFrom, Instant dateTo);

    List<DeviceMonitor> findAllByDeviceIdAndCreatedDateBetweenOrderByCreatedDateAsc(String deviceId, Instant dateFrom, Instant dateTo);

    List<DeviceMonitor> findAllByDeviceIdOrderByCreatedDateAsc(String deviceId);
}
