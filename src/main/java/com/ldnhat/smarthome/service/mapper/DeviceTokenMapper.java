package com.ldnhat.smarthome.service.mapper;

import com.ldnhat.smarthome.domain.DeviceToken;
import com.ldnhat.smarthome.service.dto.DeviceTokenDTO;
import org.mapstruct.Mapper;

@Mapper(componentModel = "spring")
public interface DeviceTokenMapper extends EntityMapper<DeviceTokenDTO, DeviceToken> {}
