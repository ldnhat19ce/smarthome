package com.ldnhat.smarthome.domain;

import com.fasterxml.jackson.annotation.JsonIgnore;
import java.io.Serializable;
import java.time.Instant;
import java.util.Objects;
import org.springframework.data.annotation.*;
import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.data.mongodb.core.mapping.Field;

@Document(collection = "device_monitor")
//public class DeviceMonitor extends AbstractAuditingEntity<String> implements Serializable {
public class DeviceMonitor implements Serializable {

    @Id
    private String id;

    private String value;

    @Field("unit_measure")
    private String unitMeasure;

    @JsonIgnore
    private Device device;

    private String month;

    @Field("created_by")
    private String createdBy;

    @Field("created_date")
    private Instant createdDate = Instant.now();

    @Field("last_modified_by")
    private String lastModifiedBy;

    @Field("last_modified_date")
    private Instant lastModifiedDate = Instant.now();

    public String getCreatedBy() {
        return createdBy;
    }

    public void setCreatedBy(String createdBy) {
        this.createdBy = createdBy;
    }

    public Instant getCreatedDate() {
        return createdDate;
    }

    public void setCreatedDate(Instant createdDate) {
        this.createdDate = createdDate;
    }

    public String getLastModifiedBy() {
        return lastModifiedBy;
    }

    public void setLastModifiedBy(String lastModifiedBy) {
        this.lastModifiedBy = lastModifiedBy;
    }

    public Instant getLastModifiedDate() {
        return lastModifiedDate;
    }

    public void setLastModifiedDate(Instant lastModifiedDate) {
        this.lastModifiedDate = lastModifiedDate;
    }

    public String getMonth() {
        return month;
    }

    public void setMonth(String month) {
        this.month = month;
    }

    //    @Override
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
        return (
            "DeviceMonitor{" +
            "id='" +
            id +
            '\'' +
            ", value='" +
            value +
            '\'' +
            ", unitMeasure='" +
            unitMeasure +
            '\'' +
            ", device=" +
            device +
            ", month='" +
            month +
            '\'' +
            '}'
        );
    }
}
