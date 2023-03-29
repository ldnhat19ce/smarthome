package com.ldnhat.smarthome.repository;

import com.ldnhat.smarthome.domain.DeviceTimer;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface DeviceTimerRepository extends MongoRepository<DeviceTimer, String> {
}
