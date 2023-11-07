package com.ldnhat.smarthome.service.dto;

import java.time.Instant;
import java.util.Objects;

public class DateMonthDTO {

    private int dateNumber;
    private Instant dateFrom;
    private Instant dateTo;

    public int getDateNumber() {
        return dateNumber;
    }

    public void setDateNumber(int dateNumber) {
        this.dateNumber = dateNumber;
    }

    public Instant getDateFrom() {
        return dateFrom;
    }

    public void setDateFrom(Instant dateFrom) {
        this.dateFrom = dateFrom;
    }

    public Instant getDateTo() {
        return dateTo;
    }

    public void setDateTo(Instant dateTo) {
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
