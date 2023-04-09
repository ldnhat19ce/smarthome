package com.ldnhat.smarthome.repository;

import com.ldnhat.smarthome.domain.NotificationSetting;
import java.util.List;
import java.util.Optional;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface NotificationSettingRepository extends MongoRepository<NotificationSetting, String> {
    boolean existsByValueAndDeviceIdAndCreatedBy(String value, String deviceId, String login);

    Page<NotificationSetting> findAllByDeviceIdAndCreatedBy(String deviceId, String login, Pageable pageable);

    Optional<NotificationSetting> findOneByIdAndCreatedBy(String id, String login);

    List<NotificationSetting> findAllByValueInAndDeviceIdIn(List<String> values, List<String> deviceIds);
}
