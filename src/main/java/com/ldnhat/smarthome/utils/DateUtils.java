package com.ldnhat.smarthome.utils;

import com.ldnhat.smarthome.service.dto.DateMonthDTO;
import java.time.LocalDateTime;
import java.time.LocalTime;
import java.time.YearMonth;
import java.time.ZoneId;
import java.util.ArrayList;
import java.util.Calendar;
import java.util.Date;
import java.util.List;

public class DateUtils {

    public static ZoneId getZone() {
        return ZoneId.of("Asia/Ho_Chi_Minh");
    }

    public static LocalDateTime atStartOfDay(Date date) {
        LocalDateTime localDateTime = dateToLocalDateTime(date);
        return localDateTime.with(LocalTime.MIN);
    }

    public static LocalDateTime atEndOfDay(Date date) {
        LocalDateTime localDateTime = dateToLocalDateTime(date);
        return localDateTime.with(LocalTime.MAX);
    }

    private static LocalDateTime dateToLocalDateTime(Date date) {
        return LocalDateTime.ofInstant(date.toInstant(), getZone());
    }

    private static Date localDateTimeToDate(LocalDateTime localDateTime) {
        return Date.from(localDateTime.atZone(ZoneId.of("Asia/Ho_Chi_Minh")).toInstant());
    }

    public static LocalDateTime minusDays(Date date, int day) {
        LocalDateTime localDateTime = dateToLocalDateTime(date);
        return localDateTime.minusDays(day).with(LocalTime.MIN);
    }

    public static LocalDateTime firstDayOfMonth(Date date) {
        LocalDateTime localDateTime = dateToLocalDateTime(date);
        return localDateTime.withDayOfMonth(1).with(LocalTime.MIDNIGHT);
    }

    public static LocalDateTime lastDayOfMonth(Date date) {
        LocalDateTime localDateTime = dateToLocalDateTime(date);
        return localDateTime.withDayOfMonth(YearMonth.now().atEndOfMonth().getDayOfMonth()).with(LocalTime.MAX);
    }

    public static LocalDateTime firstDayOfPreviousMonth(Date date) {
        Calendar calendar = Calendar.getInstance();
        calendar.setTime(date);

        if (calendar.get(Calendar.MONTH) == Calendar.JANUARY) {
            calendar.set(Calendar.MONTH, Calendar.DECEMBER);
            calendar.set(Calendar.YEAR, calendar.get(Calendar.YEAR) - 1);
        } else {
            calendar.roll(Calendar.MONTH, false);
        }
        calendar.set(Calendar.DATE, 1);

        return LocalDateTime.ofInstant(calendar.toInstant(), getZone());
    }

    public static LocalDateTime lastDayOfPreviousMonth(Date date) {
        Calendar calendar = Calendar.getInstance();
        calendar.setTime(date);

        if (calendar.get(Calendar.MONTH) == Calendar.JANUARY) {
            calendar.set(Calendar.MONTH, Calendar.DECEMBER);
            calendar.set(Calendar.YEAR, calendar.get(Calendar.YEAR) - 1);
        } else {
            calendar.roll(Calendar.MONTH, false);
        }
        calendar.set(Calendar.DATE, calendar.getActualMaximum(Calendar.DAY_OF_MONTH));
        calendar.set(Calendar.HOUR_OF_DAY, calendar.getActualMaximum(Calendar.HOUR_OF_DAY));
        calendar.set(Calendar.MINUTE, calendar.getActualMaximum(Calendar.MINUTE));
        calendar.set(Calendar.SECOND, calendar.getActualMaximum(Calendar.SECOND));

        return LocalDateTime.ofInstant(calendar.toInstant(), getZone());
    }

    public static LocalDateTime firstDayOfPreviousMonth(Date date, int month) {
        Calendar calendar = Calendar.getInstance();
        calendar.setTime(date);
        calendar.add(Calendar.MONTH, -month);
        calendar.set(Calendar.DATE, 1);
        calendar.set(Calendar.HOUR_OF_DAY, 0);
        calendar.set(Calendar.MINUTE, 0);
        calendar.set(Calendar.SECOND, 0);

        return LocalDateTime.ofInstant(calendar.toInstant(), getZone());
    }

    public static Date lastDayOfPreviousMonth(Date date, int month) {
        Calendar calendar = Calendar.getInstance();
        calendar.setTime(date);
        calendar.add(Calendar.MONTH, -month);
        calendar.set(Calendar.DATE, calendar.getActualMaximum(Calendar.DAY_OF_MONTH));

        return calendar.getTime();
    }

    public static LocalDateTime firstDayOfMonth(Date date, int month) {
        Calendar calendar = Calendar.getInstance();
        calendar.setTime(date);

        calendar.set(Calendar.MONTH, month);
        calendar.set(Calendar.DATE, 1);
        calendar.set(Calendar.HOUR_OF_DAY, 0);
        calendar.set(Calendar.MINUTE, 0);
        calendar.set(Calendar.SECOND, 0);

        return LocalDateTime.ofInstant(calendar.toInstant(), getZone());
    }

    public static LocalDateTime lastDayOfMonth(Date date, int month) {
        Calendar calendar = Calendar.getInstance();
        calendar.setTime(date);

        calendar.set(Calendar.MONTH, month);
        calendar.set(Calendar.DATE, calendar.getActualMaximum(Calendar.DAY_OF_MONTH));
        calendar.set(Calendar.HOUR_OF_DAY, calendar.getActualMaximum(Calendar.HOUR_OF_DAY));
        calendar.set(Calendar.MINUTE, calendar.getActualMaximum(Calendar.MINUTE));
        calendar.set(Calendar.SECOND, calendar.getActualMaximum(Calendar.SECOND));

        return LocalDateTime.ofInstant(calendar.toInstant(), getZone());
    }

    public static String getCurrentMonth() {
        Date date = new Date();
        Calendar calendar = Calendar.getInstance();
        calendar.setTime(date);

        return String.valueOf(calendar.get(Calendar.MONTH) + 1);
    }

    public static List<DateMonthDTO> getListMonthOfTheYear() {
        List<DateMonthDTO> listMonth = new ArrayList<>();
        Date date = new Date();

        for (int i = 0; i < 12; i++) {
            DateMonthDTO dateMonthDTO = new DateMonthDTO();
            dateMonthDTO.setDateNumber(i + 1);
            dateMonthDTO.setDateFrom(firstDayOfMonth(date, i));
            dateMonthDTO.setDateTo(lastDayOfMonth(date, i));

            listMonth.add(dateMonthDTO);
        }

        return listMonth;
    }
}
