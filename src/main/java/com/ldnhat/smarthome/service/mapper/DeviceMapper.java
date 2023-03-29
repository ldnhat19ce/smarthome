package com.ldnhat.smarthome.service.mapper;

import com.ldnhat.smarthome.domain.Device;
import com.ldnhat.smarthome.service.dto.DeviceDTO;
import org.mapstruct.Mapper;

@Mapper(componentModel = "spring")
public interface DeviceMapper extends EntityMapper<DeviceDTO, Device> {
}
