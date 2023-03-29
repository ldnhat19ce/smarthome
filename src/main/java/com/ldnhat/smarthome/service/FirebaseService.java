package com.ldnhat.smarthome.service;

import com.google.cloud.firestore.CollectionReference;
import com.google.firebase.cloud.FirestoreClient;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;

import java.util.HashMap;
import java.util.Map;

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
}
