package com.ldnhat.smarthome.domain;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.ldnhat.smarthome.domain.enumeration.DeviceAction;
import com.ldnhat.smarthome.domain.enumeration.DeviceType;
import java.io.Serializable;
import java.util.Objects;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.data.mongodb.core.mapping.Field;

@Document(collection = "device")
public class Device extends AbstractAuditingEntity<String> implements Serializable {

    @Id
    private String id;

    @Field("name")
    private String name;

    @Field("unit_measure")
    private String unitMeasure;

    @Field("device_type")
    private DeviceType deviceType;

    @Field("device_action")
    private DeviceAction deviceAction;

    @JsonIgnore
    private User user;

    @Override
    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getUnitMeasure() {
        return unitMeasure;
    }

    public void setUnitMeasure(String unitMeasure) {
        this.unitMeasure = unitMeasure;
    }

    public DeviceType getDeviceType() {
        return deviceType;
    }

    public void setDeviceType(DeviceType deviceType) {
        this.deviceType = deviceType;
    }

    public DeviceAction getDeviceAction() {
        return deviceAction;
    }

    public void setDeviceAction(DeviceAction deviceAction) {
        this.deviceAction = deviceAction;
    }

    public User getUser() {
        return user;
    }

    public void setUser(User user) {
        this.user = user;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (!(o instanceof Device)) {
            return false;
        }
        Device that = (Device) o;
        return id != null && Objects.equals(id, that.id);
    }

    @Override
    public int hashCode() {
        return getClass().hashCode();
    }

    @Override
    public String toString() {
        return (
            "Device{" +
            "id='" +
            id +
            '\'' +
            ", name='" +
            name +
            '\'' +
            ", unitMeasure='" +
            unitMeasure +
            '\'' +
            ", deviceType=" +
            deviceType +
            ", deviceAction=" +
            deviceAction +
            ", user=" +
            user +
            '}'
        );
    }
}
