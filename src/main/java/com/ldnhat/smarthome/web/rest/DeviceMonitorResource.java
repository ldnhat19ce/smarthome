package com.ldnhat.smarthome.web.rest;

import com.ldnhat.smarthome.repository.DeviceMonitorRepository;
import com.ldnhat.smarthome.security.SecurityUtils;
import com.ldnhat.smarthome.service.DeviceMonitorService;
import com.ldnhat.smarthome.service.dto.DeviceMonitorDTO;
import com.ldnhat.smarthome.service.error.UserException;
import com.ldnhat.smarthome.web.rest.errors.BadRequestAlertException;
import java.net.URI;
import java.net.URISyntaxException;
import java.util.List;
import java.util.concurrent.ExecutionException;
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
import tech.jhipster.web.util.ResponseUtil;

/**
 * REST controller for managing {@link com.ldnhat.smarthome.domain.DeviceMonitor}.
 */
@RestController
@RequestMapping("/api")
public class DeviceMonitorResource {

    private static final List<String> ALLOWED_ORDERED_PROPERTIES = List.of(
        "id",
        "value",
        "unitMeasure",
        "createdBy",
        "createdDate",
        "lastModifiedBy",
        "lastModifiedDate"
    );

    private final Logger log = LoggerFactory.getLogger(DeviceMonitorResource.class);

    private static final String ENTITY_NAME = "userDeviceMonitor";

    @Value("${jhipster.clientApp.name}")
    private String applicationName;

    private final DeviceMonitorService deviceMonitorService;
    private final DeviceMonitorRepository deviceMonitorRepository;

    public DeviceMonitorResource(DeviceMonitorService deviceMonitorService, DeviceMonitorRepository deviceMonitorRepository) {
        this.deviceMonitorService = deviceMonitorService;
        this.deviceMonitorRepository = deviceMonitorRepository;
    }

    /**
     * {@code POST  /device-monitor} : Create a new device monitor.
     *
     * @param deviceMonitorDTO the deviceMonitor to create.
     * @return the {@link ResponseEntity} with status {@code 201 (Created)} and with body the new deviceMonitor, or with status {@code 400 (Bad Request)} if the deviceMonitor has already an ID.
     */
    @PostMapping("/device-monitor")
    public ResponseEntity<DeviceMonitorDTO> createDeviceMonitor(@Valid @RequestBody DeviceMonitorDTO deviceMonitorDTO)
        throws URISyntaxException {
        log.debug("REST request to save Device Monitor : {}", deviceMonitorDTO);
        if (deviceMonitorDTO.getId() != null) {
            throw new BadRequestAlertException("A new device monitor cannot already have an ID", ENTITY_NAME, "idexists");
        }

        DeviceMonitorDTO result = deviceMonitorService.save(deviceMonitorDTO);
        return ResponseEntity
            .created(new URI("/api/device-monitor/" + result.getId()))
            .headers(HeaderUtil.createEntityCreationAlert(applicationName, true, ENTITY_NAME, result.getId()))
            .body(result);
    }

    /**
     * {@code GET /device-monitor/{deviceId}} : get all devices monitor with all the details
     *
     * @param pageable the pagination information.
     * @param deviceId the id of device.
     * @return the {@link ResponseEntity} with status {@code 200 (OK)} and with body all device monitor.
     */
    @GetMapping("/device-monitor/{deviceId}")
    public ResponseEntity<List<DeviceMonitorDTO>> getAllDeviceMonitor(
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
        if (!deviceMonitorRepository.existsByDeviceIdAndCreatedBy(deviceId, login)) {
            throw new BadRequestAlertException("Device not found", ENTITY_NAME, "devicenotfound");
        }

        final Page<DeviceMonitorDTO> page = deviceMonitorService.findAllByDevice(pageable, deviceId);
        HttpHeaders headers = PaginationUtil.generatePaginationHttpHeaders(ServletUriComponentsBuilder.fromCurrentRequest(), page);
        return new ResponseEntity<>(page.getContent(), headers, HttpStatus.OK);
    }

    private boolean onlyContainsAllowedProperties(Pageable pageable) {
        return pageable.getSort().stream().map(Sort.Order::getProperty).allMatch(ALLOWED_ORDERED_PROPERTIES::contains);
    }

    /**
     * {@code GET /device-monitor/range/{deviceId}} : get range min max device monitor
     *
     * @param deviceId the id of device.
     * @return the {@link ResponseEntity} with status {@code 200 (OK)} and with body device monitor.
     */
    @GetMapping("/device-monitor/range/{deviceId}")
    public ResponseEntity<DeviceMonitorDTO> getRangeDeviceMonitor(@PathVariable String deviceId) {
        log.debug("REST request to get range device monitor");
        String login = SecurityUtils
            .getCurrentUserLogin()
            .orElseThrow(() -> new UserException("Unauthorized user", ENTITY_NAME, "usertoken"));
        if (!deviceMonitorRepository.existsByDeviceIdAndCreatedBy(deviceId, login)) {
            throw new BadRequestAlertException("Device not found", ENTITY_NAME, "devicenotfound");
        }

        return ResponseUtil.wrapOrNotFound(deviceMonitorService.getRangeDeviceMonitor(deviceId));
    }

    /**
     * {@code GET /device-monitor/range/{deviceId}/{type}} : get list range min max device monitor
     *
     * @param deviceId the id of device.
     * @param type     the type of filter (0 -> 8).
     * @return the {@link ResponseEntity} with status {@code 200 (OK)} and with body list device monitor.
     */
    @GetMapping("/device-monitor/range/{deviceId}/{type}")
    public ResponseEntity<List<DeviceMonitorDTO>> getListRangeDeviceMonitor(@PathVariable String deviceId, @PathVariable String type) {
        log.debug("REST request to get list range device monitor");
        String login = SecurityUtils
            .getCurrentUserLogin()
            .orElseThrow(() -> new UserException("Unauthorized user", ENTITY_NAME, "usertoken"));
        if (!deviceMonitorRepository.existsByDeviceIdAndCreatedBy(deviceId, login)) {
            throw new BadRequestAlertException("Device not found", ENTITY_NAME, "devicenotfound");
        }

        return new ResponseEntity<>(deviceMonitorService.findAllDeviceMonitoryByDeviceIdAndType(deviceId, type), HttpStatus.OK);
    }

    /**
     * {@code GET /device-monitor/statistical/year/{deviceId}} : statistical device monitor in year
     *
     * @param deviceId the id of device.
     * @return the {@link ResponseEntity} with status {@code 200 (OK)} and with body list device monitor.
     */
    @GetMapping("/device-monitor/statistical/year/{deviceId}")
    public ResponseEntity<List<DeviceMonitorDTO>> statisticalDeviceMonitorInYear(@PathVariable String deviceId)
        throws ExecutionException, InterruptedException {
        log.debug("REST request to statistical device monitor in year");
        String login = SecurityUtils
            .getCurrentUserLogin()
            .orElseThrow(() -> new UserException("Unauthorized user", ENTITY_NAME, "usertoken"));
        if (!deviceMonitorRepository.existsByDeviceIdAndCreatedBy(deviceId, login)) {
            throw new BadRequestAlertException("Device not found", ENTITY_NAME, "devicenotfound");
        }

        return new ResponseEntity<>(deviceMonitorService.statisticalDeviceMonitorInYear(deviceId), HttpStatus.OK);
    }

    /**
     * {@code POST  /device-monitor/dummy/{deviceId}} : dummy device monitor
     *
     * @param deviceId the id to create.
     * @return the {@link ResponseEntity} with status {@code 201 (Created)} and with body the new deviceMonitor, or with status {@code 400 (Bad Request)} if the deviceMonitor has already an ID.
     */
    @PostMapping("/device-monitor/dummy/{deviceId}/{month}")
    public ResponseEntity<Void> dummyDeviceMonitor(@PathVariable String deviceId, @PathVariable Integer month) {
        log.debug("REST request to dummy Device Monitor : {}", deviceId);

        deviceMonitorService.dummyData(deviceId, month);
        return ResponseEntity.noContent().build();
    }
}
