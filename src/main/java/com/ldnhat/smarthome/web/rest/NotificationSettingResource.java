package com.ldnhat.smarthome.web.rest;

import com.ldnhat.smarthome.repository.NotificationSettingRepository;
import com.ldnhat.smarthome.security.SecurityUtils;
import com.ldnhat.smarthome.service.NotificationSettingService;
import com.ldnhat.smarthome.service.dto.NotificationSettingDTO;
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
import org.springdoc.api.annotations.ParameterObject;
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
 * REST controller for managing {@link com.ldnhat.smarthome.domain.NotificationSetting}.
 */
@RestController
@RequestMapping("/api")
public class NotificationSettingResource {

    private static final List<String> ALLOWED_ORDERED_PROPERTIES = Collections.unmodifiableList(
        Arrays.asList("id", "title", "message", "createdBy", "createdDate", "lastModifiedBy", "lastModifiedDate")
    );

    private final Logger log = LoggerFactory.getLogger(DeviceTimerResource.class);

    private static final String ENTITY_NAME = "userNotificationSetting";

    @Value("${jhipster.clientApp.name}")
    private String applicationName;

    private final NotificationSettingService notificationSettingService;

    private final NotificationSettingRepository notificationSettingRepository;

    public NotificationSettingResource(
        NotificationSettingService notificationSettingService,
        NotificationSettingRepository notificationSettingRepository
    ) {
        this.notificationSettingService = notificationSettingService;
        this.notificationSettingRepository = notificationSettingRepository;
    }

    /**
     * {@code POST  /notification-setting/test} : Test send notification.
     *
     * @param notificationSettingDTO the NotificationSettingDTO to test.
     * @return the {@link ResponseEntity} with status {@code 204 (NO_CONTENT)}.
     */
    @PostMapping("/notification-setting/test/{deviceId}")
    public ResponseEntity<Void> testNotification(
        @Valid @RequestBody NotificationSettingDTO notificationSettingDTO,
        @PathVariable String deviceId
    ) {
        log.debug("REST request to test send notification : {}", notificationSettingDTO);
        notificationSettingService.test(notificationSettingDTO, deviceId);
        return ResponseEntity.noContent().build();
    }

    /**
     * {@code POST  /notification-setting} : create a new notification setting.
     *
     * @param notificationSettingDTO the NotificationSettingDTO to create.
     * @return the {@link ResponseEntity} with status {@code 201 (Created)} and with body the new notificationSetting,
     * or with status {@code 400 (Bad Request)} if the notificationSetting has already an ID.
     */
    @PostMapping("/notification-setting")
    public ResponseEntity<NotificationSettingDTO> createNotificationSetting(
        @Valid @RequestBody NotificationSettingDTO notificationSettingDTO
    ) throws URISyntaxException {
        log.debug("REST request to create notification setting : {}", notificationSettingDTO);
        if (notificationSettingDTO.getId() != null) {
            throw new BadRequestAlertException("A new notificationSetting cannot already have an ID", ENTITY_NAME, "idexists");
        }
        if (notificationSettingDTO.getDeviceDTO().getId() == null) {
            throw new BadRequestAlertException("A device id must not be null", ENTITY_NAME, "deviceidnotexists");
        }
        String login = SecurityUtils
            .getCurrentUserLogin()
            .orElseThrow(() -> new UserException("Unauthorized user", ENTITY_NAME, "usertoken"));
        if (
            notificationSettingRepository.existsByValueAndDeviceIdAndCreatedBy(
                notificationSettingDTO.getValue(),
                notificationSettingDTO.getDeviceDTO().getId(),
                login
            )
        ) {
            throw new BadRequestAlertException(
                "The value of notification in device id already exists",
                ENTITY_NAME,
                "notificationsettingvalueexists"
            );
        }
        NotificationSettingDTO result = notificationSettingService.save(notificationSettingDTO);
        return ResponseEntity
            .created(new URI("/api/notification-setting/" + result.getId()))
            .headers(HeaderUtil.createEntityCreationAlert(applicationName, true, ENTITY_NAME, result.getId()))
            .body(result);
    }

    /**
     * {@code GET /notification-setting/:id} : get all notification setting with all the details.
     *
     * @param pageable the pagination information.
     * @param id       the id of device.
     * @return the {@link ResponseEntity} with status {@code 200 (OK)} and with body all notification setting of device.
     */
    @GetMapping("/notification-setting/{id}")
    public ResponseEntity<List<NotificationSettingDTO>> getAllNotificationSetting(
        @ParameterObject Pageable pageable,
        @PathVariable String id
    ) {
        log.debug("REST request to get all notification setting for current device");
        if (!onlyContainsAllowedProperties(pageable)) {
            return ResponseEntity.badRequest().build();
        }
        final Page<NotificationSettingDTO> page = notificationSettingService.findAllByDeviceId(pageable, id);
        HttpHeaders headers = PaginationUtil.generatePaginationHttpHeaders(ServletUriComponentsBuilder.fromCurrentRequest(), page);
        return new ResponseEntity<>(page.getContent(), headers, HttpStatus.OK);
    }

    private boolean onlyContainsAllowedProperties(Pageable pageable) {
        return pageable.getSort().stream().map(Sort.Order::getProperty).allMatch(ALLOWED_ORDERED_PROPERTIES::contains);
    }

    /**
     * {@code DELETE /devices/:id} : delete the notification setting.
     *
     * @param id the id of the notification setting to delete.
     * @return the {@link ResponseEntity} with status {@code 204 (NO_CONTENT)}.
     */
    @DeleteMapping("/notification-setting/{id}")
    public ResponseEntity<Void> deleteNotificationSetting(@PathVariable String id) {
        log.debug("REST request to delete Notification setting: {}", id);
        notificationSettingService.delete(id);
        return ResponseEntity.noContent().headers(HeaderUtil.createEntityDeletionAlert(applicationName, true, ENTITY_NAME, id)).build();
    }
}
