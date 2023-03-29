package com.ldnhat.smarthome.web.rest;

import com.ldnhat.smarthome.domain.SpeechData;
import com.ldnhat.smarthome.repository.SpeechDataRepository;
import com.ldnhat.smarthome.security.SecurityUtils;
import com.ldnhat.smarthome.service.SpeechDataService;
import com.ldnhat.smarthome.service.dto.SpeechDataDTO;
import com.ldnhat.smarthome.service.error.UserException;
import com.ldnhat.smarthome.web.rest.errors.BadRequestAlertException;
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

import javax.validation.Valid;
import java.net.URI;
import java.net.URISyntaxException;
import java.util.Arrays;
import java.util.Collections;
import java.util.List;
import java.util.Optional;

/**
 * REST controller for managing {@link SpeechData}.
 */
@RestController
@RequestMapping("/api")
public class SpeechDataResource {

    private static final List<String> ALLOWED_ORDERED_PROPERTIES = Collections.unmodifiableList(
        Arrays.asList(
            "id",
            "messageRequest",
            "messageResponse",
            "createdBy",
            "createdDate",
            "lastModifiedBy",
            "lastModifiedDate"
        )
    );

    private final Logger log = LoggerFactory.getLogger(SpeechDataResource.class);

    private static final String ENTITY_NAME = "userSpeechData";

    @Value("${jhipster.clientApp.name}")
    private String applicationName;

    private final SpeechDataService speechDataService;

    private final SpeechDataRepository speechDataRepository;

    public SpeechDataResource(SpeechDataService speechDataService, SpeechDataRepository speechDataRepository) {
        this.speechDataService = speechDataService;
        this.speechDataRepository = speechDataRepository;
    }

    /**
     * {@code POST  /speech-data} : Create a new speechData.
     *
     * @param speechDataDTO the speechDataDTO to create.
     * @return the {@link ResponseEntity} with status {@code 201 (Created)} and with body the new speechDataDTO, or with status {@code 400 (Bad Request)} if the asset has already an ID.
     * @throws URISyntaxException if the Location URI syntax is incorrect.
     */
    @PostMapping("/speech-data")
    public ResponseEntity<SpeechDataDTO> createSpeechData(@Valid @RequestBody SpeechDataDTO speechDataDTO) throws URISyntaxException {
        log.debug("REST request to save Speech Data : {}", speechDataDTO);
        if (speechDataDTO.getId() != null) {
            throw new BadRequestAlertException("A new speechData cannot already have an ID", ENTITY_NAME, "idexists");
        }
        String login = SecurityUtils.getCurrentUserLogin().orElseThrow(() -> new UserException("Unauthorized user", ENTITY_NAME, "usertoken"));
        if (speechDataRepository.existsByMessageRequestIgnoreCaseAndCreatedBy(speechDataDTO.getMessageRequest(), login)) {
            throw new BadRequestAlertException("Message Request already exists", ENTITY_NAME, "messagerequestexists");
        }
        if (speechDataRepository.existsByDeviceIdAndDeviceDeviceTypeAndDeviceDeviceAction(speechDataDTO.getDeviceDTO().getId(), speechDataDTO.getDeviceDTO().getDeviceType(), speechDataDTO.getDeviceDTO().getDeviceAction())) {
            throw new BadRequestAlertException("Device action already exists", ENTITY_NAME, "deviceactionexists");
        }
        SpeechDataDTO result = speechDataService.save(speechDataDTO);
        return ResponseEntity
            .created(new URI("/api/speech-data/" + result.getId()))
            .headers(HeaderUtil.createEntityCreationAlert(applicationName, true, ENTITY_NAME, result.getId()))
            .body(result);
    }

    /**
     * {@code GET  /speech-data/:id} : get the "id" speechData.
     *
     * @param id the id of the SpeechDataDTO to retrieve.
     * @return the {@link ResponseEntity} with status {@code 200 (OK)} and with body the SpeechDataDTO, or with status {@code 404 (Not Found)}.
     */
    @GetMapping("/speech-data/{id}")
    public ResponseEntity<SpeechDataDTO> getSpeechData(@PathVariable String id) {
        log.debug("REST request to get Speech Data : {}", id);
        Optional<SpeechDataDTO> result = speechDataService.findOne(id);
        return ResponseUtil.wrapOrNotFound(result);
    }

    /**
     * {@code GET /devices} : get all devices with all the details - calling this are only allowed for the administrators.
     *
     * @param pageable the pagination information.
     * @return the {@link ResponseEntity} with status {@code 200 (OK)} and with body all devices.
     */
    @GetMapping("/speech-data")
    public ResponseEntity<List<SpeechDataDTO>> getAllSpeechData(
        @org.springdoc.api.annotations.ParameterObject Pageable pageable) {
        log.debug("REST request to get all speech data for current user");
        if (!onlyContainsAllowedProperties(pageable)) {
            return ResponseEntity.badRequest().build();
        }

        final Page<SpeechDataDTO> page = speechDataService.findAllByUser(pageable);
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
    @DeleteMapping("/speech-data/{id}")
    public ResponseEntity<Void> deleteSpeechData(@PathVariable String id) {
        log.debug("REST request to delete Device: {}", id);
        speechDataService.delete(id);
        return ResponseEntity.noContent().headers(HeaderUtil.createEntityDeletionAlert(applicationName, true, ENTITY_NAME, id)).build();
    }

    /**
     * {@code PUT /speech-data} : Updates an existing SpeechData.
     *
     * @param speechDataDTO the speechData to update.
     * @return the {@link ResponseEntity} with status {@code 200 (OK)} and with body the updated speechData.
     * @throws BadRequestAlertException {@code 400 (Bad Request)} if the id not found or messageRequest already used.
     */
    @PutMapping("/speech-data")
    public ResponseEntity<SpeechDataDTO> updateSpeechData(@Valid @RequestBody SpeechDataDTO speechDataDTO) {
        log.debug("REST request to update speech data : {}", speechDataDTO);
        if (speechDataDTO.getId() == null) {
            throw new BadRequestAlertException("Invalid id", ENTITY_NAME, "idnull");
        }
        String login = SecurityUtils.getCurrentUserLogin().orElseThrow(() -> new UserException("Unauthorized user", ENTITY_NAME, "usertoken"));
        Optional<SpeechData> existingSpeechData = speechDataRepository.findOneByMessageRequestIgnoreCaseAndCreatedBy(speechDataDTO.getMessageRequest(), login);
        if (existingSpeechData.isPresent() && (!existingSpeechData.get().getId().equals(speechDataDTO.getId()))) {
            throw new BadRequestAlertException("Message Request already exists", ENTITY_NAME, "messagerequestexists");
        }
        if (!speechDataRepository.existsById(speechDataDTO.getId())) {
            throw new BadRequestAlertException("Entity not found", ENTITY_NAME, "idnotfound");
        }
        Optional<SpeechDataDTO> updatedSpeechData = speechDataService.update(speechDataDTO);
        return ResponseUtil.wrapOrNotFound(
            updatedSpeechData,
            HeaderUtil.createEntityUpdateAlert(applicationName, true, ENTITY_NAME, speechDataDTO.getId())
        );
    }

    /**
     * {@code POST /speech-data/text} : text request to handle some mission.
     *
     * @param speechDataDTO the speechData to update.
     * @return the {@link ResponseEntity} with status {@code 200 (OK)} and with body the message response.
     * @throws BadRequestAlertException {@code 400 (Bad Request)} if the message request not found.
     */
    @PostMapping("/speech-data/text")
    public ResponseEntity<SpeechDataDTO> handleMessageRequest(@Valid @RequestBody SpeechDataDTO speechDataDTO) {
        log.debug("REST request to handle text : {}", speechDataDTO);
        if (speechDataDTO.getMessageRequest() == null) {
            throw new BadRequestAlertException("Invalid message request", ENTITY_NAME, "messagerequestnull");
        }
        String login = SecurityUtils.getCurrentUserLogin().orElseThrow(() -> new UserException("Unauthorized user", ENTITY_NAME, "usertoken"));
        String messageRequest = StringUtils.remove(speechDataDTO.getMessageRequest(), ".");
        speechDataDTO.setMessageRequest(messageRequest);
        if (!speechDataRepository.existsByMessageRequestIgnoreCaseAndCreatedBy(speechDataDTO.getMessageRequest().trim(), login)) {
            throw new BadRequestAlertException("Invalid data", ENTITY_NAME, "messagerequestinvalid");
        }
        Optional<SpeechDataDTO> result = speechDataService.handleMessageRequest(speechDataDTO);
        return ResponseUtil.wrapOrNotFound(
            result,
            HeaderUtil.createAlert(applicationName, "Ok", speechDataDTO.getMessageRequest())
        );
    }
}
