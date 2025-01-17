import {
  addDays,
  addMinutes,
  differenceInDays,
  differenceInHours,
  differenceInMinutes,
  endOfDay,
  format,
  getQuarter,
  getYear,
  isAfter,
  isBefore,
  isEqual,
  isSameDay,
  isSameMonth,
  isToday,
  isTomorrow,
  isYesterday,
  parse,
  parseISO,
  setMilliseconds,
  startOfDay,
} from 'date-fns';

import { ru } from 'date-fns/locale';

export const formatDateWithTime = 'yyyy-MM-dd HH:mm';
export const formatDateNoTime = 'yyyy-MM-dd';
export const formatDateRuDefault = 'dd.MM.yyyy';
export const formatDateWithDayAndMonth = 'd MMMM';
export const formatDateShortYear = 'dd.MM.yy';
export const formatDetailDate = 'eeee, d LLLL y';
export const formatMonthCalendar = 'LLLL, y';
export const formatMonth = 'LLLL';
export const formatDay = 'd';
export const formatDayName = 'EEEE';
export const formatFileDate = 'd MMM yyyy';
export const formatDateTime = 'HH:mm:ss';
export const formatScheduleDate = 'EEEE, d MMM';
export const formatShortScheduleDate = 'd MMM';
export const formatHours = 'HH';
export const formatMinutes = 'm';
export const formatHoursAndMinutes = 'HH:mm';
export const formatCommentDate = 'dd MMM, EEEE, HH:mm';
export const formatShortMonth = 'MMM';
export const formatDateShortMonth = 'd MMM';
export const formatDateMonth = 'd MMMM';
export const formatDateShortMonthWithTime = 'd MMM, HH:mm';

export const toDate = (date: string | number | Date) => (typeof date !== 'object' ? new Date(date) : date);

export const getDefaultDate = (date: number | string | Date) => format(toDate(date), 'dd.MM.yyyy');
export const getDateTime = (date: number | string | Date) => format(toDate(date), 'dd.MM.yyyy, HH:mm');
export const getDate = (date: number | string | Date) => format(toDate(date), 'd');

export function parseDate(date: number | string | Date) {
  return typeof date === 'string' ? parse(date, formatDateWithTime, new Date()) : date;
}

export const getFormatTime = (date: number | string | Date) => {
  return typeof date === 'string' ? format(new Date(date), 'HH:mm') : format(date, 'HH:mm');
};

export const getDuration = (start: Date | string, end: Date | string) => {
  return differenceInMinutes(toDate(end), toDate(start));
};

export const getDurationRatio = (start: string | Date, end: string | Date) => {
  const durationInMinutes = getDuration(start, end);
  const ratio = (durationInMinutes / 10).toFixed(1);

  // @TODO: исправить ограничение как будут требования к задачам без привязки ко времени
  if (differenceInHours(toDate(end), toDate(start)) > 22) return 1;
  return parseFloat(ratio);
};

export const getRelativeDateWithDay = (date: number | string | Date, shortMonth?: boolean) => {
  const dateObject = toDate(date);
  const dateFormat = shortMonth ? formatDateShortMonth : formatDateWithDayAndMonth;

  if (isToday(dateObject)) {
    return `Сегодня, ${format(dateObject, dateFormat, { locale: ru }).replace(/\.$/, '')}`;
  } else if (isTomorrow(dateObject)) {
    return `Завтра, ${format(dateObject, dateFormat, { locale: ru }).replace(/\.$/, '')}`;
  } else if (isYesterday(dateObject)) {
    return `Вчера, ${format(dateObject, dateFormat, { locale: ru }).replace(/\.$/, '')}`;
  } else if (isSameDay(dateObject, addDays(new Date(), 2))) {
    return `Послезавтра, ${format(dateObject, dateFormat, { locale: ru }).replace(/\.$/, '')}`;
  }
  return format(dateObject, dateFormat, { locale: ru }).replace(/\.$/, '');
};

export const getRelativeDateWithOnlyDay = (date: number | string | Date) => {
  const dateObject = toDate(date);

  if (isToday(dateObject)) {
    return `Сегодня`;
  } else if (isTomorrow(dateObject)) {
    return `Завтра`;
  } else if (isYesterday(dateObject)) {
    return `Вчера`;
  } else if (isSameDay(dateObject, addDays(new Date(), 2))) {
    return `Послезавтра`;
  }
  return format(dateObject, formatDateWithDayAndMonth, { locale: ru });
};

export const getRelativeDateWithTime = (date: number | string | Date) => {
  const dateObject = toDate(date);

  if (isToday(dateObject)) {
    return `Сегодня, ${format(dateObject, formatHoursAndMinutes, { locale: ru })}`;
  }
  return format(dateObject, formatDateShortMonthWithTime, { locale: ru });
};

export const getRelativeDateFull = (date: number | string | Date) => {
  const dateObject = toDate(date);

  const dayOfMonth = format(dateObject, 'd');
  const abbreviatedMonth = format(dateObject, 'MMMM', { locale: ru });
  const lowercaseWeekday = format(dateObject, 'EEEE', { locale: ru });
  const formattedMonth = abbreviatedMonth.replace(/\.$/, '');
  const year = format(dateObject, 'yyyy');

  return `${lowercaseWeekday}, ${dayOfMonth} ${formattedMonth}, ${year}`;
};

//23 янв 2016
export const formatDateWithDayAndMonthAndYear = (date: number | string | Date) => {
  const dateObject = new Date(date);

  const dayOfMonth = format(dateObject, 'd', { locale: ru });
  const abbreviatedMonth = format(dateObject, 'MMM', { locale: ru });
  const formattedYear = format(dateObject, 'yyyy', { locale: ru });

  return `${dayOfMonth} ${abbreviatedMonth} ${formattedYear}`;
};

export const formatQuarterDate = (date: number | string | Date) => {
  const inputDate = typeof date === 'string' || typeof date === 'number' ? parseISO(date.toString()) : date;
  const quarter = getQuarter(inputDate);
  const year = getYear(inputDate);
  return `${quarter}кв. ${year}г.`;
};

export const getLocaleDateText = (date: number | string | Date) => {
  const toDate = typeof date === 'string' ? new Date(date) : date;
  return `${format(toDate, formatDetailDate, { locale: ru })}`;
};

export const getFormatMonth = (date: number | string | Date) => {
  return typeof date === 'string'
    ? format(new Date(date), formatMonthCalendar, { locale: ru })
    : format(date, formatMonthCalendar, { locale: ru });
};

export const getFormatHours = (date: number | string | Date) => format(toDate(date), formatHours);
export const getFormatMinutes = (date: number | string | Date) => format(toDate(date), formatMinutes);

export const getTime = (starTime?: Date, endTime?: Date, allDay?: boolean) => {
  if (allDay) return 'Весь день';
  if (starTime && endTime) return `с ${getFormatTime(starTime)} до ${getFormatTime(endTime)}`;
  if (starTime) return `с ${getFormatTime(starTime)}`;
  return 'Время';
};

export const calculateDateWithTime = (date?: Date, time?: Date) => {
  if (!time) return new Date(date ? date.setHours(10) : new Date());
  return new Date(date ? date.setHours(time.getHours(), time.getMinutes()) : new Date());
};

export const calculateDateFromDesktopSchedule = (date: Date, hour: number, minute: number) => {
  return new Date(date.setHours(hour, minute));
};

export const getFileEditDate = (date: number) => {
  const editDate = new Date(date);
  return `${format(editDate, formatFileDate, { locale: ru })} в ${format(editDate, formatDateTime, { locale: ru })}`;
};

export const isAllDay = (start: Date, end: Date, targetDate: Date) => {
  const startOfToday = startOfDay(targetDate);
  //@NOTE: endOfDay возвращает время 23:59:59.999, поэтому нужно обнулить миллисекунды
  const endOfToday = setMilliseconds(endOfDay(targetDate), 0);

  return (
    (isEqual(toDate(start), startOfToday) || isBefore(toDate(start), startOfToday)) &&
    (isEqual(toDate(end), endOfToday) || isAfter(toDate(end), endOfToday))
  );
};

export const getActuallyDates = (start: Date, end: Date, targetDate: Date): { start: Date; end: Date } => {
  const startOfToday = startOfDay(targetDate);
  const endOfToday = endOfDay(targetDate);

  const actuallyStartFromTargetDay = isSameDay(startOfToday, toDate(start)) ? toDate(start) : startOfToday;

  const actuallyEndFromTargetDay =
    isAfter(toDate(end), endOfToday) && !isEqual(endOfToday, toDate(end)) && !isSameDay(endOfToday, toDate(end))
      ? endOfToday
      : toDate(end);

  return { start: actuallyStartFromTargetDay, end: actuallyEndFromTargetDay };
};

//формат 24 мая,пятница
export const formatDateWithDayAndWeekday = (date: number | string | Date, withTime?: boolean) => {
  const dateObject = toDate(date);

  const dayOfMonth = format(dateObject, 'd');
  const abbreviatedMonth = format(dateObject, 'MMM', { locale: ru });
  const lowercaseWeekday = format(dateObject, 'EEEE', { locale: ru }).toLowerCase();
  const formattedMonth = abbreviatedMonth.replace(/\.$/, '');

  const formattedTime = format(dateObject, formatHoursAndMinutes, { locale: ru });

  return `${dayOfMonth} ${formattedMonth}, ${lowercaseWeekday},${withTime ? `, ${formattedTime}` : ''}`;
};

//формат 24 мая,пятница, 2024
export const formatDateWithDayAndWeekdayWithYear = (date: number | string | Date, withTime?: boolean) => {
  const dateObject = toDate(date);

  const dayOfMonth = format(dateObject, 'd');
  const abbreviatedMonth = format(dateObject, 'MMM', { locale: ru });
  const lowercaseWeekday = format(dateObject, 'EEEE', { locale: ru }).toLowerCase();
  const formattedMonth = abbreviatedMonth.replace(/\.$/, '');
  const formattedYear = format(dateObject, 'yyyy');
  const formattedTime = format(dateObject, formatHoursAndMinutes, { locale: ru });

  return `${dayOfMonth} ${formattedMonth}, ${lowercaseWeekday}, ${formattedYear}${
    withTime ? `, ${formattedTime}` : ''
  }`;
};

export const getClientHistoryDate = (date: Date) => {
  return {
    date: `${format(date, formatDay, { locale: ru })} ${format(date, formatShortMonth, { locale: ru }).split('.')[0]}`,
    time: format(date, formatHoursAndMinutes, { locale: ru }),
  };
};

export const formatDateWithoutDay = (date: number | string | Date) => {
  const dateObject = toDate(date);
  return format(dateObject, 'd MMM', { locale: ru }).replace(/\.$/, '');
};

export const getDateShortMonth = (date: Date) => format(date, formatDateShortMonth, { locale: ru }).replace(/\.$/, '');

export const getChipDates = (startDate: string | null, endDate: string | null) => {
  if (startDate && !endDate) return `от ${getDateShortMonth(new Date(startDate))}`;
  if (!startDate && endDate) return `до ${getDateShortMonth(new Date(endDate))}`;
  if (startDate && endDate)
    return isSameMonth(new Date(startDate), new Date(endDate))
      ? `${format(new Date(startDate), formatDay, { locale: ru })} - ${getDateShortMonth(new Date(endDate))}`
      : `${getDateShortMonth(new Date(startDate))} - ${getDateShortMonth(new Date(endDate))}`;
  return '';
};

export const getDateNoTime = (date: Date) => format(date, formatDateNoTime, { locale: ru });

export const getDateShortMonthWithYear = (date: Date) => {
  return `${format(date, formatDateShortMonth, { locale: ru }).replace(/\.$/, '')} ${format(date, 'yyyy', {
    locale: ru,
  })}`;
};

export const getDateShortYear = (date: number | string | Date) => {
  const dateObject = toDate(date);
  return format(dateObject, formatDateShortYear, { locale: ru });
};

export const isAllDayEvent = (startDate: Date | string, endDate: Date | string) => {
  const startToDate = toDate(startDate);
  const endToDate = toDate(endDate);

  return (
    isSameDay(startToDate, endToDate) &&
    format(startToDate, formatHoursAndMinutes) == '00:00' &&
    format(endToDate, formatHoursAndMinutes) == '23:59'
  );
};

export const isSomeDayEvent = (startDate: Date | string, endDate: Date | string) => {
  const startToDate = toDate(startDate);
  const endToDate = toDate(endDate);

  return !isSameDay(startToDate, endToDate);
};

export const getNewEventTime = (slotTime: Date, startDate: Date | string, endDate: Date | string) => {
  const startToDate = toDate(startDate);
  const endToDate = toDate(endDate);

  const isAllDay = isAllDayEvent(startDate, endDate);
  const isSomeDay = isSomeDayEvent(startDate, endDate);

  if (isSomeDay) {
    const diffBetweenDates = differenceInDays(startOfDay(slotTime), startOfDay(startToDate));

    const newStartDate = addDays(startToDate, diffBetweenDates);
    const newEndDate = addDays(endToDate, diffBetweenDates);

    return {
      startDate: newStartDate,
      endDate: newEndDate,
      isAllDay: false,
      isSomeDay: true,
    };
  } else if (isAllDay) {
    const diffBetweenDates = differenceInDays(startOfDay(slotTime), startToDate);

    const newStartDate = addDays(startToDate, diffBetweenDates);
    const newEndDate = addDays(endToDate, diffBetweenDates);

    return {
      startDate: newStartDate,
      endDate: newEndDate,
      isAllDay: true,
      isSomeDay: false,
    };
  } else {
    const diffBetweenDates = differenceInMinutes(slotTime, startToDate);

    const newStartDate = addMinutes(startToDate, diffBetweenDates);
    const newEndDate = addMinutes(endToDate, diffBetweenDates);

    return {
      startDate: newStartDate,
      endDate: newEndDate,
      isAllDay: false,
      isSomeDay: false,
    };
  }
};

export const getNewEventTimeDnD = (
  slotTime: Date,
  startDate: Date | string | undefined,
  endDate: Date | string | undefined
): string => {
  if (startDate == null || endDate == null) return '';

  const newDates = getNewEventTime(slotTime, startDate, endDate);

  if (newDates.isAllDay) {
    return format(newDates.startDate, formatDateMonth, { locale: ru });
  } else if (isSameDay(newDates.startDate, newDates.endDate)) {
    return `${format(newDates.startDate, formatHoursAndMinutes, { locale: ru })} - ${format(
      newDates.endDate,
      formatHoursAndMinutes,
      {
        locale: ru,
      }
    )}`;
  } else {
    return `${format(newDates.startDate, formatDateShortMonthWithTime, { locale: ru })} - ${format(
      newDates.endDate,
      formatDateShortMonthWithTime,
      { locale: ru }
    )}`;
  }
};
