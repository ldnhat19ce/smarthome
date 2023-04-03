package com.ldnhat.smarthome.web.rest;

import com.ldnhat.smarthome.repository.DeviceRepository;
import com.ldnhat.smarthome.security.SecurityUtils;
import com.ldnhat.smarthome.service.DeviceTimerService;
import com.ldnhat.smarthome.service.dto.DeviceTimerDTO;
import com.ldnhat.smarthome.service.error.UserException;
import com.ldnhat.smarthome.web.rest.errors.BadRequestAlertException;
import java.net.URI;
import java.net.URISyntaxException;
import java.util.Arrays;
import java.util.Collections;
import java.util.List;
import javax.validation.Valid;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;
import tech.jhipster.web.util.HeaderUtil;
import tech.jhipster.web.util.PaginationUtil;

/**
 * REST controller for managing {@link com.ldnhat.smarthome.domain.DeviceTimer}.
 */
@RestController
@RequestMapping("/api")
public class DeviceTimerResource {

    private static final List<String> ALLOWED_ORDERED_PROPERTIES = Collections.unmodifiableList(
        Arrays.asList("id", "startTime", "endTime", "deviceAction", "createdBy", "createdDate", "lastModifiedBy", "lastModifiedDate")
    );

    private final Logger log = LoggerFactory.getLogger(DeviceTimerResource.class);

    private static final String ENTITY_NAME = "userDeviceTimer";

    @Value("${jhipster.clientApp.name}")
    private String applicationName;

    private final DeviceTimerService deviceTimerService;

    private final DeviceRepository deviceRepository;

    public DeviceTimerResource(DeviceTimerService deviceTimerService, DeviceRepository deviceRepository) {
        this.deviceTimerService = deviceTimerService;
        this.deviceRepository = deviceRepository;
    }

    /**
     * {@code POST  /devices-timer} : Create a new device timer.
     *
     * @param deviceTimerDTO the DeviceTimerDTO to create.
     * @return the {@link ResponseEntity} with status {@code 201 (Created)} and with body the new device timer, or with status {@code 400 (Bad Request)} if the device timer has already an ID.
     */
    @PostMapping("/device-timer")
    public ResponseEntity<DeviceTimerDTO> createDeviceTimer(@Valid @RequestBody DeviceTimerDTO deviceTimerDTO) throws URISyntaxException {
        log.debug("REST request to save Device timer : {}", deviceTimerDTO);
        if (deviceTimerDTO.getId() != null) {
            throw new BadRequestAlertException("A new device timer cannot already have an ID", ENTITY_NAME, "idexists");
        }
        if (!deviceRepository.existsById(deviceTimerDTO.getDeviceDTO().getId())) {
            throw new BadRequestAlertException("Entity not found", ENTITY_NAME, "idnotfound");
        }

        DeviceTimerDTO result = deviceTimerService.save(deviceTimerDTO);
        return ResponseEntity
            .created(new URI("/api/devices/timers/" + result.getId()))
            .headers(HeaderUtil.createEntityCreationAlert(applicationName, true, ENTITY_NAME, result.getId()))
            .body(result);
    }

    /**
     * {@code GET /devices-timer/{deviceId}} : get all devices timer with all the details
     *
     * @param pageable the pagination information.
     * @param deviceId the id of device.
     * @return the {@link ResponseEntity} with status {@code 200 (OK)} and with body all device timer.
     */
    @GetMapping("/device-timer/{deviceId}")
    public ResponseEntity<List<DeviceTimerDTO>> getAllDeviceTimer(
        @org.springdoc.api.annotations.ParameterObject Pageable pageable,
        @PathVariable String deviceId
    ) {
        log.debug("REST request to get all device monitor for current device");
        if (!onlyContainsAllowedProperties(pageable)) {
            return ResponseEntity.badRequest().build();
        }
        String login = SecurityUtils
            .getCurrentUserLogin()
            .orElseThrow(() -> new UserException("Unauthorized user", ENTITY_NAME, "usertoken"));
        if (!deviceRepository.existsByIdAndCreatedBy(deviceId, login)) {
            throw new BadRequestAlertException("Device not found", ENTITY_NAME, "devicenotfound");
        }

        final Page<DeviceTimerDTO> page = deviceTimerService.findAllByDevice(pageable, deviceId);
        HttpHeaders headers = PaginationUtil.generatePaginationHttpHeaders(ServletUriComponentsBuilder.fromCurrentRequest(), page);
        return new ResponseEntity<>(page.getContent(), headers, HttpStatus.OK);
    }

    private boolean onlyContainsAllowedProperties(Pageable pageable) {
        return pageable.getSort().stream().map(Sort.Order::getProperty).allMatch(ALLOWED_ORDERED_PROPERTIES::contains);
    }

    /**
     * {@code DELETE /device-timer/:id} : delete the device timer.
     *
     * @param id the id of the device timer to delete.
     * @return the {@link ResponseEntity} with status {@code 204 (NO_CONTENT)}.
     */
    @DeleteMapping("/device-timer/{id}")
    public ResponseEntity<Void> deleteDeviceTimer(@PathVariable String id) {
        log.debug("REST request to delete Device timer: {}", id);
        deviceTimerService.delete(id);
        return ResponseEntity.noContent().headers(HeaderUtil.createEntityDeletionAlert(applicationName, true, ENTITY_NAME, id)).build();
    }
}
