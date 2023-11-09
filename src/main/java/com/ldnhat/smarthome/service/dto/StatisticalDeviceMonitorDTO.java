package com.ldnhat.smarthome.service.dto;

import java.util.List;

public class StatisticalDeviceMonitorDTO {

    private String month;

    private String day;

    private String hour;

    private String minute;
    private List<DeviceMonitorDTO> deviceMonitors;

    public String getDay() {
        return day;
    }

    public void setDay(String day) {
        this.day = day;
    }

    public String getHour() {
        return hour;
    }

    public void setHour(String hour) {
        this.hour = hour;
    }

    public String getMonth() {
        return month;
    }

    public void setMonth(String month) {
        this.month = month;
    }

    public List<DeviceMonitorDTO> getDeviceMonitors() {
        return deviceMonitors;
    }

    public void setDeviceMonitors(List<DeviceMonitorDTO> deviceMonitors) {
        this.deviceMonitors = deviceMonitors;
    }

    public String getMinute() {
        return minute;
    }

    public void setMinute(String minute) {
        this.minute = minute;
    }
}
