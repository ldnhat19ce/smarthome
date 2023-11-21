package com.ldnhat.smarthome.service.mapper;

import com.ldnhat.smarthome.domain.Device;
import com.ldnhat.smarthome.domain.News;
import com.ldnhat.smarthome.service.dto.DeviceDTO;
import com.ldnhat.smarthome.service.dto.NewsDTO;
import java.util.List;
import org.mapstruct.*;

@Mapper(componentModel = "spring")
public interface NewsMapper extends EntityMapper<NewsDTO, News> {
    @Mapping(source = "device", target = "deviceDTO", qualifiedByName = "deviceId")
    @Named("mapNewsToDTO")
    NewsDTO toDto(News news);

    @Named("deviceId")
    @BeanMapping(ignoreByDefault = true)
    @Mapping(target = "id", source = "id")
    DeviceDTO toDTODeviceId(Device device);

    @IterableMapping(qualifiedByName = "mapNewsToDTO")
    List<NewsDTO> toDto(List<News> entityList);
}
