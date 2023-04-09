package com.ldnhat.smarthome.repository;

import com.ldnhat.smarthome.domain.DeviceToken;
import java.util.List;
import org.springframework.data.mongodb.repository.DeleteQuery;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface DeviceTokenRepository extends MongoRepository<DeviceToken, String> {
    List<DeviceToken> findAllByToken(String token);

    @DeleteQuery
    void deleteAllByToken(String token);

    List<DeviceToken> findAllByCreatedByIn(List<String> login);
}
