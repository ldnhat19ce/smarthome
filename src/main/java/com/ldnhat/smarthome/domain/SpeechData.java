package com.ldnhat.smarthome.domain;

import com.fasterxml.jackson.annotation.JsonIgnore;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.data.mongodb.core.mapping.Field;

import java.io.Serializable;
import java.util.Objects;

@Document(collection = "speech_data")
public class SpeechData extends AbstractAuditingEntity<String> implements Serializable {
    @Id
    private String id;

    @Field("message_request")
    private String messageRequest;

    @Field("message_response")
    private String messageResponse;

    @JsonIgnore
    private User user;

    @JsonIgnore
    private Device device;

    @Override
    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getMessageRequest() {
        return messageRequest;
    }

    public void setMessageRequest(String messageRequest) {
        this.messageRequest = messageRequest;
    }

    public String getMessageResponse() {
        return messageResponse;
    }

    public void setMessageResponse(String messageResponse) {
        this.messageResponse = messageResponse;
    }

    public User getUser() {
        return user;
    }

    public void setUser(User user) {
        this.user = user;
    }

    public Device getDevice() {
        return device;
    }

    public void setDevice(Device device) {
        this.device = device;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (!(o instanceof SpeechData)) {
            return false;
        }
        SpeechData that = (SpeechData) o;
        return id != null && Objects.equals(id, that.id);
    }

    @Override
    public int hashCode() {
        return getClass().hashCode();
    }

    @Override
    public String toString() {
        return "SpeechData{" +
            "id='" + id + '\'' +
            ", messageRequest='" + messageRequest + '\'' +
            ", messageResponse='" + messageResponse + '\'' +
            ", user=" + user +
            ", device=" + device +
            '}';
    }
}
