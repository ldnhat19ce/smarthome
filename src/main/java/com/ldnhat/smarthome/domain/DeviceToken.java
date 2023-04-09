package com.ldnhat.smarthome.domain;

import java.io.Serializable;
import java.util.Objects;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "device_token")
public class DeviceToken extends AbstractAuditingEntity<String> implements Serializable {

    @Id
    private String id;

    private String token;

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getToken() {
        return token;
    }

    public void setToken(String token) {
        this.token = token;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (!(o instanceof DeviceToken)) {
            return false;
        }
        DeviceToken that = (DeviceToken) o;
        return id != null && Objects.equals(id, that.id);
    }

    @Override
    public int hashCode() {
        return getClass().hashCode();
    }

    @Override
    public String toString() {
        return "DeviceToken{" + "id='" + id + '\'' + ", token='" + token + '\'' + '}';
    }
}
