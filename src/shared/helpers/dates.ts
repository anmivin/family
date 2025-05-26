import { format } from 'date-fns';
import { ru } from 'date-fns/locale';
const formatDefault = 'dd.MM.yyyy';
const formatWithTime = 'dd.MM.yyyy, HH:mm';
const formatDay = 'd';
const formatDayMonth = 'dd MMM';
const formatMonthYear = 'LLLL yyyy';
export const toDate = (date: string | number | Date) => new Date(date);

export const getDefaultDate = (date: number | string | Date) => format(toDate(date), formatDefault);
export const getDateTime = (date: number | string | Date) => format(toDate(date), formatWithTime);
export const getDay = (date: number | string | Date) => format(toDate(date), formatDay);
export const getDayMonth = (date: number | string | Date) => format(toDate(date), formatDayMonth, { locale: ru });
export const getMonthYear = (date: number | string | Date) => format(toDate(date), formatMonthYear, { locale: ru });
