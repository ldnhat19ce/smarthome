package com.ldnhat.smarthome.service.dto;

import java.time.LocalDateTime;
import java.util.Objects;

public class DateMonthDTO {

    private int dateNumber;
    private LocalDateTime dateFrom;
    private LocalDateTime dateTo;

    public int getDateNumber() {
        return dateNumber;
    }

    public void setDateNumber(int dateNumber) {
        this.dateNumber = dateNumber;
    }

    public LocalDateTime getDateFrom() {
        return dateFrom;
    }

    public void setDateFrom(LocalDateTime dateFrom) {
        this.dateFrom = dateFrom;
    }

    public LocalDateTime getDateTo() {
        return dateTo;
    }

    public void setDateTo(LocalDateTime dateTo) {
        this.dateTo = dateTo;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        DateMonthDTO that = (DateMonthDTO) o;
        return dateNumber == that.dateNumber;
    }

    @Override
    public int hashCode() {
        return Objects.hash(dateNumber);
    }

    @Override
    public String toString() {
        return "DateMonthDTO{" + "dateNumber=" + dateNumber + ", dateFrom=" + dateFrom + ", dateTo=" + dateTo + '}';
    }
}
