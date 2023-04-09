package com.ldnhat.smarthome.service.mapper;

import com.ldnhat.smarthome.domain.Device;
import com.ldnhat.smarthome.domain.NotificationSetting;
import com.ldnhat.smarthome.service.dto.DeviceDTO;
import com.ldnhat.smarthome.service.dto.NotificationSettingDTO;
import org.mapstruct.BeanMapping;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;
import org.mapstruct.Named;

@Mapper(componentModel = "spring")
public interface NotificationSettingMapper extends EntityMapper<NotificationSettingDTO, NotificationSetting> {
    @Mapping(source = "deviceDTO", target = "device", qualifiedByName = "deviceId")
    NotificationSetting toEntity(NotificationSettingDTO notificationSettingDTO);

    @Named("deviceId")
    @BeanMapping(ignoreByDefault = true)
    @Mapping(target = "id", source = "id")
    Device toEntityDeviceId(DeviceDTO deviceDTO);
}
