package com.ldnhat.smarthome.repository;

import com.ldnhat.smarthome.domain.SpeechData;
import com.ldnhat.smarthome.domain.enumeration.DeviceAction;
import com.ldnhat.smarthome.domain.enumeration.DeviceType;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.mongodb.repository.MongoRepository;

import java.util.List;
import java.util.Optional;

public interface SpeechDataRepository extends MongoRepository<SpeechData, String> {
    Page<SpeechData> findAllByCreatedBy(String login, Pageable pageable);

    Optional<SpeechData> findOneById(String id);

    boolean existsByMessageRequestIgnoreCaseAndCreatedBy(String messageRequest, String login);

    Optional<SpeechData> findOneByMessageRequestIgnoreCaseAndCreatedBy(String messageRequest, String login);

    boolean existsByDeviceIdAndDeviceDeviceTypeAndDeviceDeviceAction(String deviceId, DeviceType deviceType, DeviceAction deviceAction);

    List<SpeechData> findAllByDeviceIdAndCreatedBy(String deviceId, String login);
}
