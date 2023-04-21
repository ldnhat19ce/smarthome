package com.ldnhat.smarthome.web.rest;

import com.ldnhat.smarthome.service.DeviceTokenService;
import com.ldnhat.smarthome.service.dto.DeviceTokenDTO;
import com.ldnhat.smarthome.web.rest.errors.BadRequestAlertException;
import java.net.URI;
import java.net.URISyntaxException;
import javax.validation.Valid;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import tech.jhipster.web.util.HeaderUtil;

/**
 * REST controller for managing {@link com.ldnhat.smarthome.domain.DeviceToken}.
 */
@RestController
@RequestMapping("/api")
public class DeviceTokenResource {

    private final Logger log = LoggerFactory.getLogger(DeviceTokenResource.class);

    private static final String ENTITY_NAME = "userDeviceToken";

    @Value("${jhipster.clientApp.name}")
    private String applicationName;

    private final DeviceTokenService deviceTokenService;

    public DeviceTokenResource(DeviceTokenService deviceTokenService) {
        this.deviceTokenService = deviceTokenService;
    }

    /**
     * {@code POST  /device-token} : Create a new device token.
     *
     * @param deviceTokenDTO the deviceTokenDTO to create.
     * @return the {@link ResponseEntity} with status {@code 201 (Created)} and with body the new device token, or with status {@code 400 (Bad Request)} if the device token has already an ID.
     */
    @PostMapping("/device-token")
    public ResponseEntity<DeviceTokenDTO> createDeviceToken(@Valid @RequestBody DeviceTokenDTO deviceTokenDTO) throws URISyntaxException {
        log.debug("REST request to save Device token : {}", deviceTokenDTO);
        if (deviceTokenDTO.getId() != null) {
            throw new BadRequestAlertException("A new device token cannot already have an ID", ENTITY_NAME, "idexists");
        }
        if (deviceTokenDTO.getToken() == null || deviceTokenDTO.getToken().isEmpty()) {
            throw new BadRequestAlertException("A device token must not be null", ENTITY_NAME, "tokennull");
        }

        DeviceTokenDTO result = deviceTokenService.save(deviceTokenDTO);
        return ResponseEntity
            .created(new URI("/api/device-token/" + result.getId()))
            .headers(HeaderUtil.createEntityCreationAlert(applicationName, true, ENTITY_NAME, result.getId()))
            .body(result);
    }
}
