package com.ldnhat.smarthome.domain;

import java.io.Serializable;
import java.util.Objects;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document("notification_setting")
public class NotificationSetting extends AbstractAuditingEntity<String> implements Serializable {

    @Id
    private String id;

    private String value;

    private String title;

    private String message;

    private Device device;

    @Override
    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getMessage() {
        return message;
    }

    public void setMessage(String message) {
        this.message = message;
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

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (!(o instanceof NotificationSetting)) {
            return false;
        }
        NotificationSetting that = (NotificationSetting) o;
        return id != null && Objects.equals(id, that.id);
    }

    @Override
    public int hashCode() {
        return getClass().hashCode();
    }

    @Override
    public String toString() {
        return (
            "NotificationSetting{" +
            "id='" +
            id +
            '\'' +
            ", value='" +
            value +
            '\'' +
            ", title='" +
            title +
            '\'' +
            ", message='" +
            message +
            '\'' +
            ", device=" +
            device +
            '}'
        );
    }
}
