package com.ldnhat.smarthome.service.mapper;

import com.ldnhat.smarthome.domain.Device;
import com.ldnhat.smarthome.domain.SpeechData;
import com.ldnhat.smarthome.service.dto.DeviceDTO;
import com.ldnhat.smarthome.service.dto.SpeechDataDTO;
import org.mapstruct.BeanMapping;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;
import org.mapstruct.Named;

@Mapper(componentModel = "spring")
public interface SpeechDataMapper extends EntityMapper<SpeechDataDTO, SpeechData> {
    @Mapping(source = "deviceDTO", target = "device", qualifiedByName = "deviceId")
    SpeechData toEntity(SpeechDataDTO speechDataDTO);

    @Named("deviceId")
    @BeanMapping(ignoreByDefault = true)
    @Mapping(target = "id", source = "id")
    @Mapping(target = "deviceType", source = "deviceType")
    @Mapping(target = "deviceAction", source = "deviceAction")
    Device toEntityDeviceId(DeviceDTO deviceDTO);

    @Mapping(source = "device", target = "deviceDTO", qualifiedByName = "deviceToDto")
    SpeechDataDTO toDto(SpeechData speechData);

    @Named("deviceToDto")
    @BeanMapping(ignoreByDefault = true)
    @Mapping(target = "id", source = "id")
    @Mapping(target = "deviceType", source = "deviceType")
    @Mapping(target = "deviceAction", source = "deviceAction")
    DeviceDTO toDtoDevice(Device device);
}
