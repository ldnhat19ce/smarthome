package com.ldnhat.smarthome.service.mapper;

import com.ldnhat.smarthome.domain.Device;
import com.ldnhat.smarthome.domain.DeviceMonitor;
import com.ldnhat.smarthome.service.dto.DeviceDTO;
import com.ldnhat.smarthome.service.dto.DeviceMonitorDTO;
import org.mapstruct.BeanMapping;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;
import org.mapstruct.Named;

@Mapper(componentModel = "spring")
public interface DeviceMonitorMapper extends EntityMapper<DeviceMonitorDTO, DeviceMonitor> {
    @Mapping(source = "deviceDTO", target = "device", qualifiedByName = "deviceId")
    DeviceMonitor toEntity(DeviceMonitorDTO deviceMonitorDTO);

    @Named("deviceId")
    @BeanMapping(ignoreByDefault = true)
    @Mapping(target = "id", source = "id")
    Device toEntityDeviceId(DeviceDTO deviceDTO);
}
