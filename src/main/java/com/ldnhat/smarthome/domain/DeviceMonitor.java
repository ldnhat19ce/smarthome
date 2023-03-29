package com.ldnhat.smarthome.domain;

import com.fasterxml.jackson.annotation.JsonIgnore;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.data.mongodb.core.mapping.Field;

import java.io.Serializable;
import java.util.Objects;

@Document(collection = "device_monitor")
public class DeviceMonitor extends AbstractAuditingEntity<String> implements Serializable {
    @Id
    private String id;

    private String value;

    @Field("unit_measure")
    private String unitMeasure;

    @JsonIgnore
    private Device device;

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

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (!(o instanceof DeviceMonitor)) {
            return false;
        }
        DeviceMonitor that = (DeviceMonitor) o;
        return id != null && Objects.equals(id, that.id);
    }

    @Override
    public int hashCode() {
        return getClass().hashCode();
    }

    @Override
    public String toString() {
        return "DeviceMonitor{" +
            "id='" + id + '\'' +
            ", value='" + value + '\'' +
            ", unitMeasure='" + unitMeasure + '\'' +
            ", device=" + device +
            '}';
    }
}
