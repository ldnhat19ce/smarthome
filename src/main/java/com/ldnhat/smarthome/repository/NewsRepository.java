package com.ldnhat.smarthome.repository;

import com.ldnhat.smarthome.domain.News;
import java.util.List;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface NewsRepository extends MongoRepository<News, String> {
    List<News> findTop5ByCreatedByOrderByCreatedDateDesc(String id);
}
