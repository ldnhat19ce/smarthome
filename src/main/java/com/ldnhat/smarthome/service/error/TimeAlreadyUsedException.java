package com.ldnhat.smarthome.service.error;

import com.ldnhat.smarthome.web.rest.errors.BadRequestAlertException;

public class TimeAlreadyUsedException extends BadRequestAlertException {

    public TimeAlreadyUsedException(String defaultMessage, String entityName, String errorKey) {
        super(defaultMessage, entityName, errorKey);
    }
}
