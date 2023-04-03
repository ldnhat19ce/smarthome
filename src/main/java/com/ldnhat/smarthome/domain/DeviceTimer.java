package com.ldnhat.smarthome.domain;

import com.ldnhat.smarthome.domain.enumeration.DeviceAction;
import java.io.Serializable;
import java.time.Instant;
import java.util.Objects;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document("device_timer")
public class DeviceTimer extends AbstractAuditingEntity<String> implements Serializable {

    @Id
    private String id;

    private Device device;

    private Instant startTime;

    private Instant endTime;

    private DeviceAction deviceAction;

    @Override
    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public Device getDevice() {
        return device;
    }

    public void setDevice(Device device) {
        this.device = device;
    }

    public Instant getStartTime() {
        return startTime;
    }

    public void setStartTime(Instant startTime) {
        this.startTime = startTime;
    }

    public Instant getEndTime() {
        return endTime;
    }

    public void setEndTime(Instant endTime) {
        this.endTime = endTime;
    }

    public DeviceAction getDeviceAction() {
        return deviceAction;
    }

    public void setDeviceAction(DeviceAction deviceAction) {
        this.deviceAction = deviceAction;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (!(o instanceof DeviceTimer)) {
            return false;
        }
        DeviceTimer that = (DeviceTimer) o;
        return id != null && Objects.equals(id, that.id);
    }

    @Override
    public int hashCode() {
        return getClass().hashCode();
    }

    @Override
    public String toString() {
        return (
            "DeviceTimer{" +
            "id='" +
            id +
            '\'' +
            ", device=" +
            device +
            ", startTime='" +
            startTime +
            '\'' +
            ", endTime='" +
            endTime +
            '\'' +
            ", deviceAction=" +
            deviceAction +
            '}'
        );
    }
}
