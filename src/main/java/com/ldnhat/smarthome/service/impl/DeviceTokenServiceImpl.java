package com.ldnhat.smarthome.service.impl;

import com.ldnhat.smarthome.domain.DeviceToken;
import com.ldnhat.smarthome.repository.DeviceTokenRepository;
import com.ldnhat.smarthome.service.DeviceTokenService;
import com.ldnhat.smarthome.service.dto.DeviceTokenDTO;
import com.ldnhat.smarthome.service.mapper.DeviceTokenMapper;
import java.util.List;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
@Transactional
public class DeviceTokenServiceImpl implements DeviceTokenService {

    private final Logger log = LoggerFactory.getLogger(DeviceTokenServiceImpl.class);

    private final DeviceTokenRepository deviceTokenRepository;

    private final DeviceTokenMapper deviceTokenMapper;

    private static final String ENTITY_NAME = "userDeviceToken";

    public DeviceTokenServiceImpl(DeviceTokenRepository deviceTokenRepository, DeviceTokenMapper deviceTokenMapper) {
        this.deviceTokenRepository = deviceTokenRepository;
        this.deviceTokenMapper = deviceTokenMapper;
    }

    @Override
    public DeviceTokenDTO save(DeviceTokenDTO deviceTokenDTO) {
        log.debug("Request to save DeviceToken : {}", deviceTokenDTO);
        List<DeviceToken> deviceTokens = deviceTokenRepository.findAllByToken(deviceTokenDTO.getToken());
        if (!deviceTokens.isEmpty()) {
            deviceTokenRepository.deleteAllByToken(deviceTokenDTO.getToken());
        }

        DeviceToken deviceToken = deviceTokenMapper.toEntity(deviceTokenDTO);
        deviceToken = deviceTokenRepository.save(deviceToken);
        return deviceTokenMapper.toDto(deviceToken);
    }
}
