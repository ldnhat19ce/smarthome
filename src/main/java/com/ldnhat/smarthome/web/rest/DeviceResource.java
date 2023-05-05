package com.ldnhat.smarthome.web.rest;

import com.ldnhat.smarthome.domain.Device;
import com.ldnhat.smarthome.domain.enumeration.DeviceAction;
import com.ldnhat.smarthome.domain.enumeration.DeviceType;
import com.ldnhat.smarthome.repository.DeviceRepository;
import com.ldnhat.smarthome.security.SecurityUtils;
import com.ldnhat.smarthome.service.DeviceService;
import com.ldnhat.smarthome.service.dto.DeviceDTO;
import com.ldnhat.smarthome.service.error.UserException;
import com.ldnhat.smarthome.web.rest.errors.BadRequestAlertException;
import java.net.URI;
import java.net.URISyntaxException;
import java.util.Arrays;
import java.util.Collections;
import java.util.List;
import java.util.Optional;
import javax.validation.Valid;
import org.apache.commons.lang3.StringUtils;
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
import tech.jhipster.web.util.ResponseUtil;

/**
 * REST controller for managing {@link Device}.
 */
@RestController
@RequestMapping("/api")
public class DeviceResource {

    private static final List<String> ALLOWED_ORDERED_PROPERTIES = Collections.unmodifiableList(
        Arrays.asList("id", "name", "createdBy", "createdDate", "lastModifiedBy", "lastModifiedDate")
    );

    private final Logger log = LoggerFactory.getLogger(DeviceResource.class);

    private static final String ENTITY_NAME = "userDevice";

    @Value("${jhipster.clientApp.name}")
    private String applicationName;

    private final DeviceService deviceService;
    private final DeviceRepository deviceRepository;

    public DeviceResource(DeviceService deviceService, DeviceRepository deviceRepository) {
        this.deviceService = deviceService;
        this.deviceRepository = deviceRepository;
    }

    /**
     * {@code POST  /devices} : Create a new device.
     *
     * @param deviceDTO the deviceDTO to create.
     * @return the {@link ResponseEntity} with status {@code 201 (Created)} and with body the new device, or with status {@code 400 (Bad Request)} if the asset has already an ID.
     */
    @PostMapping("/devices")
    public ResponseEntity<DeviceDTO> createDevice(@Valid @RequestBody DeviceDTO deviceDTO) throws URISyntaxException {
        log.debug("REST request to save Device : {}", deviceDTO);
        if (deviceDTO.getId() != null) {
            throw new BadRequestAlertException("A new device cannot already have an ID", ENTITY_NAME, "idexists");
        }
        String login = SecurityUtils
            .getCurrentUserLogin()
            .orElseThrow(() -> new UserException("Unauthorized user", ENTITY_NAME, "usertoken"));
        if (deviceRepository.existsByNameIgnoreCaseAndCreatedBy(deviceDTO.getName(), login)) {
            throw new BadRequestAlertException("Device name already exists", ENTITY_NAME, "nameexists");
        }
        if (
            deviceDTO.getDeviceType().equals(DeviceType.MONITOR) &&
            StringUtils.containsAny(deviceDTO.getDeviceAction().toString(), DeviceAction.ON.toString(), DeviceAction.OFF.toString())
        ) {
            throw new BadRequestAlertException("Device action must be Nothing type", ENTITY_NAME, "wrongtype");
        } else if (deviceDTO.getDeviceType().equals(DeviceType.CONTROL) && deviceDTO.getDeviceAction().equals(DeviceAction.NOTHING)) {
            throw new BadRequestAlertException("Device action must be On or Off type", ENTITY_NAME, "wrongtype");
        }
        DeviceDTO result = deviceService.save(deviceDTO);
        return ResponseEntity
            .created(new URI("/api/devices/" + result.getId()))
            .headers(HeaderUtil.createEntityCreationAlert(applicationName, true, ENTITY_NAME, result.getId()))
            .body(result);
    }

    /**
     * {@code GET  /devices/:id} : get the "id" device.
     *
     * @param id the id of the deviceDTO to retrieve.
     * @return the {@link ResponseEntity} with status {@code 200 (OK)} and with body the device, or with status {@code 404 (Not Found)}.
     */
    @GetMapping("/devices/{id}")
    public ResponseEntity<DeviceDTO> getDevice(@PathVariable String id) {
        log.debug("REST request to get Device : {}", id);
        Optional<DeviceDTO> result = deviceService.findOne(id);
        return ResponseUtil.wrapOrNotFound(result);
    }

    /**
     * {@code GET /devices} : get all devices with all the details - calling this are only allowed for the administrators.
     *
     * @param pageable the pagination information.
     * @return the {@link ResponseEntity} with status {@code 200 (OK)} and with body all devices.
     */
    @GetMapping("/devices")
    public ResponseEntity<List<DeviceDTO>> getAllDevices(
        @org.springdoc.api.annotations.ParameterObject Pageable pageable,
        @RequestParam(required = false) DeviceType deviceType
    ) {
        log.debug("REST request to get all device for current user");
        if (!onlyContainsAllowedProperties(pageable)) {
            return ResponseEntity.badRequest().build();
        }
        final Page<DeviceDTO> page = deviceService.findAllByUser(pageable, deviceType);
        HttpHeaders headers = PaginationUtil.generatePaginationHttpHeaders(ServletUriComponentsBuilder.fromCurrentRequest(), page);
        return new ResponseEntity<>(page.getContent(), headers, HttpStatus.OK);
    }

    private boolean onlyContainsAllowedProperties(Pageable pageable) {
        return pageable.getSort().stream().map(Sort.Order::getProperty).allMatch(ALLOWED_ORDERED_PROPERTIES::contains);
    }

    /**
     * {@code DELETE /devices/:id} : delete the device.
     *
     * @param id the id of the device to delete.
     * @return the {@link ResponseEntity} with status {@code 204 (NO_CONTENT)}.
     */
    @DeleteMapping("/devices/{id}")
    public ResponseEntity<Void> deleteDevice(@PathVariable String id) {
        log.debug("REST request to delete Device: {}", id);
        deviceService.delete(id);
        return ResponseEntity.noContent().headers(HeaderUtil.createEntityDeletionAlert(applicationName, true, ENTITY_NAME, id)).build();
    }

    /**
     * {@code PUT /devices} : Updates an existing Device.
     *
     * @param deviceDTO the device to update.
     * @return the {@link ResponseEntity} with status {@code 200 (OK)} and with body the updated device.
     * @throws BadRequestAlertException {@code 400 (Bad Request)} if the id not found or name already used.
     */
    @PutMapping("/devices")
    public ResponseEntity<DeviceDTO> updateDevice(@Valid @RequestBody DeviceDTO deviceDTO) {
        log.debug("REST request to update device : {}", deviceDTO);
        if (deviceDTO.getId() == null) {
            throw new BadRequestAlertException("Invalid id", ENTITY_NAME, "idnull");
        }
        String login = SecurityUtils
            .getCurrentUserLogin()
            .orElseThrow(() -> new UserException("Unauthorized user", ENTITY_NAME, "usertoken"));
        Optional<Device> existingDevice = deviceRepository.findOneByNameIgnoreCaseAndCreatedBy(deviceDTO.getName(), login);
        if (existingDevice.isPresent() && (!existingDevice.get().getId().equals(deviceDTO.getId()))) {
            throw new BadRequestAlertException("Device name already exists", ENTITY_NAME, "nameexists");
        }
        if (!deviceRepository.existsById(deviceDTO.getId())) {
            throw new BadRequestAlertException("Entity not found", ENTITY_NAME, "idnotfound");
        }
        if (deviceDTO.getDeviceType().equals(DeviceType.MONITOR) && !deviceDTO.getDeviceAction().equals(DeviceAction.NOTHING)) {
            throw new BadRequestAlertException("Device monitor should be of type nothing", ENTITY_NAME, "wrongdeviceaction");
        }
        Optional<DeviceDTO> updatedDevice = deviceService.update(deviceDTO);
        return ResponseUtil.wrapOrNotFound(
            updatedDevice,
            HeaderUtil.createEntityUpdateAlert(applicationName, true, ENTITY_NAME, deviceDTO.getId())
        );
    }

    /**
     * {@code PUT /devices/action/{id}} : Updates state of existing Device.
     *
     * @param id the device to update.
     * @return the {@link ResponseEntity} with status {@code 200 (OK)} and with body the updated device action.
     * @throws BadRequestAlertException {@code 400 (Bad Request)} if the id not found.
     */
    @PutMapping("/devices/action/{id}")
    public ResponseEntity<DeviceAction> updateStateDevice(@PathVariable String id) {
        log.debug("REST request to update state of device : {}", id);

        String login = SecurityUtils
            .getCurrentUserLogin()
            .orElseThrow(() -> new UserException("Unauthorized user", ENTITY_NAME, "usertoken"));
        Optional<Device> existingDevice = deviceRepository.findOneByIdAndCreatedBy(id, login);
        if (existingDevice.isPresent()) {
            if ((!existingDevice.get().getDeviceType().equals(DeviceType.CONTROL))) {
                throw new BadRequestAlertException("Device type should be of Control", ENTITY_NAME, "wrongdevicetype");
            }
        } else {
            throw new BadRequestAlertException("Entity not found", ENTITY_NAME, "idnotfound");
        }

        Optional<DeviceAction> updatedDeviceAction = deviceService.updateState(id);
        return ResponseUtil.wrapOrNotFound(updatedDeviceAction, HeaderUtil.createEntityUpdateAlert(applicationName, true, ENTITY_NAME, id));
    }
}
