package com.ldnhat.smarthome.repository;

import com.ldnhat.smarthome.domain.DeviceMonitor;
import java.time.LocalDateTime;
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

    List<DeviceMonitor> findAllByCreatedDateBetween(LocalDateTime dateFrom, LocalDateTime dateTo);

    Optional<DeviceMonitor> findFirstByDeviceIdAndCreatedDateBetweenOrderByValueDesc(
        String deviceId,
        LocalDateTime dateFrom,
        LocalDateTime dateTo
    );

    Optional<DeviceMonitor> findFirstByDeviceIdAndCreatedDateBetweenOrderByValueAsc(
        String deviceId,
        LocalDateTime dateFrom,
        LocalDateTime dateTo
    );

    //    @Query(value = "deviceId : ?0, createdDate: {$gte: ?1, $lte: ?2} }", fields = "{ value : 1, }")
    List<DeviceMonitor> findAllByDeviceIdAndCreatedDateBetweenOrderByCreatedDateAsc(
        String deviceId,
        LocalDateTime dateFrom,
        LocalDateTime dateTo
    );

    List<DeviceMonitor> findAllByDeviceIdOrderByCreatedDateAsc(String deviceId);

    Optional<DeviceMonitor> findDistinctFirstByDeviceIdOrderByCreatedDateDesc(String id);
}
