package com.ldnhat.smarthome.config.dbmigrations;

import com.ldnhat.smarthome.domain.*;
import org.springframework.context.annotation.Bean;
import org.springframework.data.mongodb.core.MongoTemplate;
import org.springframework.stereotype.Component;

@Component
public class InitCollection {

    private final MongoTemplate mongoTemplate;

    public InitCollection(MongoTemplate mongoTemplate) {
        this.mongoTemplate = mongoTemplate;
    }

    @Bean
    public void createCollection() {
        if (!mongoTemplate.collectionExists(SpeechData.class)) {
            mongoTemplate.createCollection(SpeechData.class);
        }

        if (!mongoTemplate.collectionExists(Device.class)) {
            mongoTemplate.createCollection(Device.class);
        }

        if (!mongoTemplate.collectionExists(DeviceMonitor.class)) {
            mongoTemplate.createCollection(DeviceMonitor.class);
        }

        if (!mongoTemplate.collectionExists(DeviceTimer.class)) {
            mongoTemplate.createCollection(DeviceTimer.class);
        }

        if (!mongoTemplate.collectionExists(NotificationSetting.class)) {
            mongoTemplate.createCollection(NotificationSetting.class);
        }

        if (!mongoTemplate.collectionExists(DeviceToken.class)) {
            mongoTemplate.createCollection(DeviceToken.class);
        }
    }
}
