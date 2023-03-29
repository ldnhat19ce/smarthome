package com.ldnhat.smarthome.repository;

import com.ldnhat.smarthome.domain.DeviceMonitorHistory;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface DeviceMonitorHistoryRepository extends MongoRepository<DeviceMonitorHistory, String> {
}
