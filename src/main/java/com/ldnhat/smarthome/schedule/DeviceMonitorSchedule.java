package com.ldnhat.smarthome.schedule;

import com.ldnhat.smarthome.repository.DeviceMonitorRepository;
import com.ldnhat.smarthome.service.FirebaseService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Component;

@Component
public class DeviceMonitorSchedule {

    private static final Logger log = LoggerFactory.getLogger(DeviceMonitorSchedule.class);

    private final DeviceMonitorRepository deviceMonitorRepository;

    private final FirebaseService firebaseService;

    public DeviceMonitorSchedule(DeviceMonitorRepository deviceMonitorRepository, FirebaseService firebaseService) {
        this.deviceMonitorRepository = deviceMonitorRepository;
        this.firebaseService = firebaseService;
    }
}
