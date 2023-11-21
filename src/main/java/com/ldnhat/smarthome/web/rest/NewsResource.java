package com.ldnhat.smarthome.web.rest;

import com.ldnhat.smarthome.service.NewsService;
import com.ldnhat.smarthome.service.dto.NewsDTO;
import java.util.List;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

/**
 * REST controller for managing {@link com.ldnhat.smarthome.domain.News}.
 */
@RestController
@RequestMapping("/api")
public class NewsResource {

    private final Logger log = LoggerFactory.getLogger(NewsResource.class);

    private static final String ENTITY_NAME = "news";

    @Value("${jhipster.clientApp.name}")
    private String applicationName;

    private final NewsService newsService;

    public NewsResource(NewsService newsService) {
        this.newsService = newsService;
    }

    /**
     * {@code GET /news} : get latest 5 news by user
     *
     * @return the {@link ResponseEntity} with status {@code 200 (OK)} and with body latest 5 news.
     */
    @GetMapping("/news")
    public ResponseEntity<List<NewsDTO>> getLatestNews() {
        log.debug("REST request to get latest news");
        return new ResponseEntity<>(newsService.findLatestNews(), HttpStatus.OK);
    }
}
