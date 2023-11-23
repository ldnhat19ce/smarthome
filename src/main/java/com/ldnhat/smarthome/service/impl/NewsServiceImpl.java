package com.ldnhat.smarthome.service.impl;

import com.ldnhat.smarthome.repository.NewsRepository;
import com.ldnhat.smarthome.security.SecurityUtils;
import com.ldnhat.smarthome.service.NewsService;
import com.ldnhat.smarthome.service.dto.NewsDTO;
import com.ldnhat.smarthome.service.error.UserException;
import com.ldnhat.smarthome.service.mapper.NewsMapper;
import java.util.List;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
@Transactional
public class NewsServiceImpl implements NewsService {

    private final Logger log = LoggerFactory.getLogger(NewsServiceImpl.class);

    private final NewsRepository newsRepository;

    private final NewsMapper newsMapper;

    private static final String ENTITY_NAME = "SmartHomeNewsService";

    public NewsServiceImpl(NewsRepository newsRepository, NewsMapper newsMapper) {
        this.newsRepository = newsRepository;
        this.newsMapper = newsMapper;
    }

    @Override
    public List<NewsDTO> findLatestNews() {
        log.debug("Request to get 5 latest news");

        String login = SecurityUtils
            .getCurrentUserLogin()
            .orElseThrow(() -> new UserException("Unauthorized user", ENTITY_NAME, "usertoken"));

        return newsMapper.toDto(newsRepository.findTop5ByCreatedByOrderByCreatedDateDesc(login));
    }
}
