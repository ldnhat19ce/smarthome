package com.ldnhat.smarthome.service;

import com.google.cloud.firestore.CollectionReference;
import com.google.firebase.cloud.FirestoreClient;
import com.google.firebase.messaging.*;
import com.ldnhat.smarthome.domain.NotificationSetting;
import com.ldnhat.smarthome.service.dto.NotificationSettingDTO;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;

/**
 * Service class for update value in device control.
 */
@Service
public class FirebaseService {

    @Value("${app.firestore.collection}")
    private String firebaseCollection;

    public void updateDeviceControl(String login, String deviceAction, String deviceId) {
        CollectionReference collection = FirestoreClient.getFirestore().collection(firebaseCollection);

        Map<String, Object> values = new HashMap<>();
        values.put("action", deviceAction);

        collection.document("device_action").collection(login).document(deviceId).update(values);
    }

    public void createDeviceControl(String login, String deviceAction, String deviceId) {
        CollectionReference collection = FirestoreClient.getFirestore().collection(firebaseCollection);

        Map<String, Object> values = new HashMap<>();
        values.put("action", deviceAction);

        collection.document("device_action").collection(login).document(deviceId).create(values);
    }

    public void sendNotificationToMulticastToken(NotificationSettingDTO notificationSettingDTO, String deviceId) {
        Message message = Message
            .builder()
            .setNotification(new Notification(notificationSettingDTO.getTitle(), notificationSettingDTO.getMessage()))
            .setToken(deviceId)
            .build();

        try {
            String response = FirebaseMessaging.getInstance().send(message);
            System.out.println(response);
        } catch (FirebaseMessagingException e) {
            e.printStackTrace();
        }
    }

    public void sendMulticastToken(NotificationSetting notificationSetting, List<String> deviceTokens) {
        MulticastMessage message = MulticastMessage
            .builder()
            .setNotification(new Notification(notificationSetting.getTitle(), notificationSetting.getMessage()))
            .addAllTokens(deviceTokens)
            .build();

        try {
            FirebaseMessaging.getInstance().sendMulticast(message);
        } catch (FirebaseMessagingException e) {
            e.printStackTrace();
        }
    }
}
