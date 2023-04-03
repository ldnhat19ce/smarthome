package com.ldnhat.smarthome.service.mapper;

import com.ldnhat.smarthome.domain.Device;
import com.ldnhat.smarthome.domain.DeviceTimer;
import com.ldnhat.smarthome.service.dto.DeviceDTO;
import com.ldnhat.smarthome.service.dto.DeviceTimerDTO;
import org.mapstruct.BeanMapping;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;
import org.mapstruct.Named;

@Mapper(componentModel = "spring")
public interface DeviceTimerMapper extends EntityMapper<DeviceTimerDTO, DeviceTimer> {
    @Mapping(source = "deviceDTO", target = "device", qualifiedByName = "deviceId")
    DeviceTimer toEntity(DeviceTimerDTO deviceTimerDTO);

    @Named("deviceId")
    @BeanMapping(ignoreByDefault = true)
    @Mapping(target = "id", source = "id")
    Device toEntityDeviceId(DeviceDTO deviceDTO);
}
