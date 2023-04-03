package com.ldnhat.smarthome.repository;

import com.ldnhat.smarthome.domain.DeviceTimer;
import java.util.List;
import java.util.Optional;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface DeviceTimerRepository extends MongoRepository<DeviceTimer, String> {
    List<DeviceTimer> findAllByDeviceIdAndCreatedBy(String deviceId, String login);

    Page<DeviceTimer> findAllByDeviceIdAndCreatedBy(String deviceId, String login, Pageable pageable);

    Optional<DeviceTimer> findOneById(String id);
}
