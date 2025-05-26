import { format } from 'date-fns';

const formatDateDefault = 'dd.MM.yyyy';
const formatDateWithTime = 'dd.MM.yyyy, HH:mm';
const formatDateDay = 'd';

export const toDate = (date: string | number | Date) => new Date(date);

export const getDefaultDate = (date: number | string | Date) => format(toDate(date), formatDateDefault);
export const getDateTime = (date: number | string | Date) => format(toDate(date), formatDateWithTime);
export const getDate = (date: number | string | Date) => format(toDate(date), formatDateDay);
