package com.ldnhat.smarthome.service.error;

import com.ldnhat.smarthome.web.rest.errors.BadRequestAlertException;

@SuppressWarnings("java:S110")
public class UserException extends BadRequestAlertException {

    public UserException(String defaultMessage, String entityName, String errorKey) {
        super(defaultMessage, entityName, errorKey);
    }
}
