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
