package com.ldnhat.smarthome.service;

import com.ldnhat.smarthome.service.dto.SpeechDataDTO;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

import java.util.Optional;

/**
 * Service Interface for managing {@link com.ldnhat.smarthome.domain.SpeechData}.
 */
public interface SpeechDataService {
    /**
     * Save a speech data.
     *
     * @param speechDataDTO the entity to save.
     * @return the persisted entity.
     */
    SpeechDataDTO save(SpeechDataDTO speechDataDTO);

    /**
     * Get the "id" speechData.
     *
     * @param id the id of the entity.
     * @return the entity.
     */
    Optional<SpeechDataDTO> findOne(String id);

    /**
     * Get all speechData by current user.
     *
     * @param pageable the pagination information.
     * @return the list of entities.
     */
    Page<SpeechDataDTO> findAllByUser(Pageable pageable);

    /**
     * Delete the "id" speechData.
     *
     * @param id the id of the entity.
     */
    void delete(String id);

    /**
     * Updates a speechData.
     *
     * @param speechDataDTO the entity to update.
     * @return the persisted entity.
     */
    Optional<SpeechDataDTO> update(SpeechDataDTO speechDataDTO);

    /**
     * message request to handle some mission.
     *
     * @param speechDataDTO the entity to handle.
     * @return the message response of entity.
     */
    Optional<SpeechDataDTO> handleMessageRequest(SpeechDataDTO speechDataDTO);
}
