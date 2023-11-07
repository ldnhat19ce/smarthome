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

    public static Date atStartOfDay(Date date) {
        LocalDateTime localDateTime = dateToLocalDateTime(date);
        LocalDateTime startOfDay = localDateTime.with(LocalTime.MIN);
        return localDateTimeToDate(startOfDay);
    }

    public static Date atEndOfDay(Date date) {
        LocalDateTime localDateTime = dateToLocalDateTime(date);
        LocalDateTime endOfDay = localDateTime.with(LocalTime.MAX);
        return localDateTimeToDate(endOfDay);
    }

    private static LocalDateTime dateToLocalDateTime(Date date) {
        return LocalDateTime.ofInstant(date.toInstant(), ZoneId.of("Asia/Ho_Chi_Minh"));
    }

    private static Date localDateTimeToDate(LocalDateTime localDateTime) {
        return Date.from(localDateTime.atZone(ZoneId.of("Asia/Ho_Chi_Minh")).toInstant());
    }

    public static Date minusDays(Date date, int day) {
        LocalDateTime localDateTime = dateToLocalDateTime(date);
        LocalDateTime startOfDay = localDateTime.minusDays(day).with(LocalTime.MIN);
        return localDateTimeToDate(startOfDay);
    }

    public static Date firstDayOfMonth(Date date) {
        LocalDateTime localDateTime = dateToLocalDateTime(date);
        LocalDateTime startOfDay = localDateTime.withDayOfMonth(1).with(LocalTime.MIDNIGHT);
        return localDateTimeToDate(startOfDay);
    }

    public static Date lastDayOfMonth(Date date) {
        LocalDateTime localDateTime = dateToLocalDateTime(date);
        LocalDateTime startOfDay = localDateTime.withDayOfMonth(YearMonth.now().atEndOfMonth().getDayOfMonth()).with(LocalTime.MAX);
        return localDateTimeToDate(startOfDay);
    }

    public static Date firstDayOfPreviousMonth(Date date) {
        Calendar calendar = Calendar.getInstance();
        calendar.setTime(date);

        if (calendar.get(Calendar.MONTH) == Calendar.JANUARY) {
            calendar.set(Calendar.MONTH, Calendar.DECEMBER);
            calendar.set(Calendar.YEAR, calendar.get(Calendar.YEAR) - 1);
        } else {
            calendar.roll(Calendar.MONTH, false);
        }
        calendar.set(Calendar.DATE, 1);

        return calendar.getTime();
    }

    public static Date lastDayOfPreviousMonth(Date date) {
        Calendar calendar = Calendar.getInstance();
        calendar.setTime(date);

        if (calendar.get(Calendar.MONTH) == Calendar.JANUARY) {
            calendar.set(Calendar.MONTH, Calendar.DECEMBER);
            calendar.set(Calendar.YEAR, calendar.get(Calendar.YEAR) - 1);
        } else {
            calendar.roll(Calendar.MONTH, false);
        }
        calendar.set(Calendar.DATE, calendar.getActualMaximum(Calendar.DAY_OF_MONTH));

        return calendar.getTime();
    }

    public static Date firstDayOfPreviousMonth(Date date, int month) {
        Calendar calendar = Calendar.getInstance();
        calendar.setTime(date);
        calendar.add(Calendar.MONTH, -month);
        calendar.set(Calendar.DATE, 1);

        return calendar.getTime();
    }

    public static Date lastDayOfPreviousMonth(Date date, int month) {
        Calendar calendar = Calendar.getInstance();
        calendar.setTime(date);
        calendar.add(Calendar.MONTH, -month);
        calendar.set(Calendar.DATE, calendar.getActualMaximum(Calendar.DAY_OF_MONTH));

        return calendar.getTime();
    }

    public static Date firstDayOfMonth(Date date, int month) {
        Calendar calendar = Calendar.getInstance();
        calendar.setTime(date);

        calendar.set(Calendar.MONTH, month);
        calendar.set(Calendar.DATE, 1);

        return calendar.getTime();
    }

    public static Date lastDayOfMonth(Date date, int month) {
        Calendar calendar = Calendar.getInstance();
        calendar.setTime(date);

        calendar.set(Calendar.MONTH, month);
        calendar.set(Calendar.DATE, calendar.getActualMaximum(Calendar.DAY_OF_MONTH));

        return calendar.getTime();
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
            dateMonthDTO.setDateFrom(firstDayOfMonth(date, i).toInstant());
            dateMonthDTO.setDateTo(lastDayOfMonth(date, i).toInstant());

            listMonth.add(dateMonthDTO);
        }

        return listMonth;
    }
}
