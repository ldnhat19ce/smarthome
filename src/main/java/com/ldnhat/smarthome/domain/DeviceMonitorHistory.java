package com.ldnhat.smarthome.domain;

import com.fasterxml.jackson.annotation.JsonIgnore;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.data.mongodb.core.mapping.Field;

import java.io.Serializable;
import java.util.Objects;

@Document(collection = "device_monitor_history")
public class DeviceMonitorHistory extends AbstractAuditingEntity<String> implements Serializable {
    @Id
    private String id;

    private String value;

    @Field("unit_measure")
    private String unitMeasure;

    @Field("device_monitor")
    @JsonIgnore
    private DeviceMonitor deviceMonitor;

    @Override
    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getValue() {
        return value;
    }

    public void setValue(String value) {
        this.value = value;
    }

    public String getUnitMeasure() {
        return unitMeasure;
    }

    public void setUnitMeasure(String unitMeasure) {
        this.unitMeasure = unitMeasure;
    }

    public DeviceMonitor getDeviceMonitor() {
        return deviceMonitor;
    }

    public void setDeviceMonitor(DeviceMonitor deviceMonitor) {
        this.deviceMonitor = deviceMonitor;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (!(o instanceof DeviceMonitorHistory)) {
            return false;
        }
        DeviceMonitorHistory that = (DeviceMonitorHistory) o;
        return id != null && Objects.equals(id, that.id);
    }

    @Override
    public int hashCode() {
        return getClass().hashCode();
    }

    @Override
    public String toString() {
        return "DeviceMonitorHistory{" +
            "id='" + id + '\'' +
            ", value='" + value + '\'' +
            ", unitMeasure='" + unitMeasure + '\'' +
            ", deviceMonitor=" + deviceMonitor +
            '}';
    }
}
