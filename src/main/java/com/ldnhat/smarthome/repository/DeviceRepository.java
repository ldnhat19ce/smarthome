package com.ldnhat.smarthome.repository;

import com.ldnhat.smarthome.domain.Device;
import com.ldnhat.smarthome.domain.enumeration.DeviceType;
import java.util.List;
import java.util.Optional;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

/**
 * Spring Data MongoDB repository for the {@link Device} entity.
 */
@Repository
public interface DeviceRepository extends MongoRepository<Device, String> {
    boolean existsByNameAndCreatedBy(String name, String login);

    boolean existsByNameIgnoreCaseAndCreatedBy(String name, String login);

    boolean existsByIdAndCreatedBy(String id, String login);

    Page<Device> findAllByCreatedBy(String login, Pageable pageable);

    Page<Device> findAllByCreatedByAndDeviceType(String login, DeviceType deviceType, Pageable pageable);

    Optional<Device> findOneById(String id);

    Optional<Device> findOneByNameIgnoreCaseAndCreatedBy(String name, String login);

    Optional<Device> findOneByIdAndCreatedBy(String id, String login);

    List<Device> findAllByIdIn(List<String> ids);
}
