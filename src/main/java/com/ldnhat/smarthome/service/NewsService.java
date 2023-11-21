package com.ldnhat.smarthome.service;

import com.ldnhat.smarthome.service.dto.NewsDTO;
import java.util.List;

/**
 * Service Interface for managing {@link com.ldnhat.smarthome.domain.News}.
 */
public interface NewsService {
    /**
     * Get 5 latest news.
     *
     * @return the list of entities.
     */
    List<NewsDTO> findLatestNews();
}
