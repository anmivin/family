import { object, string, mixed, number, date, boolean, array } from 'yup';
import { Difficulty, RepeatPeriod, DayOfWeek } from '@shared/api/Api';

export enum XPTarget {
  Skill = 'Skill',
  Characteristic = 'Characteristic',
}

export const PeriodLabels: Record<
  RepeatPeriod,
  {
    textfieldLabel: string;
    labels: { zero?: string; one?: string; two?: string; few?: string; many?: string; other: string };
  }
> = {
  [RepeatPeriod.DAILY]: { textfieldLabel: 'Ежедневно', labels: { one: 'день', two: 'дня', few: 'дня', other: 'дней' } },
  [RepeatPeriod.WEEKLY]: {
    textfieldLabel: 'Еженедельно',
    labels: { one: 'неделю', two: 'недели', few: 'недели', other: 'недель' },
  },
  [RepeatPeriod.MONTHLY]: {
    textfieldLabel: 'Ежемесячно',
    labels: { one: 'месяц', two: 'месяца', few: 'месяца', other: 'месяцев' },
  },
  [RepeatPeriod.YEARLY]: { textfieldLabel: 'Ежегодно', labels: { one: 'год', two: 'года', few: 'года', other: 'лет' } },
};

export const DayLabels: Record<DayOfWeek, string> = {
  [DayOfWeek.MONDAY]: 'ПН',
  [DayOfWeek.TUESDAY]: 'ВТ',
  [DayOfWeek.WEDNESDAY]: 'СР',
  [DayOfWeek.THURSDAY]: 'ЧТ',
  [DayOfWeek.FRIDAY]: 'ПТ',
  [DayOfWeek.SATURDAY]: 'СБ',
  [DayOfWeek.SUNDAY]: 'ВС',
};

export interface TaskFormValues {
  name: string;
  description?: string;
  difficulty: Difficulty;
  target: XPTarget;
  skills: { item: { id?: string; name?: string }; percent?: number }[];
  characteristics: { item: { id?: string; name?: string }; percent?: number }[];
  date?: Date;
  time?: Date;
  habit?: boolean;
  important?: boolean;
  simple?: boolean;
  repeat?: { period?: RepeatPeriod; count?: number; days?: DayOfWeek };
  asignee?: { id?: string; name?: string };
}

export interface TaskFormProps {
  selectedTask: TaskFormValues;
}

export const TaskFormSchema = object({
  name: string().required(),
  description: string(),
  difficulty: mixed<Difficulty>().oneOf(Object.values(Difficulty)).required(),
  target: mixed<XPTarget>().oneOf(Object.values(XPTarget)).required(),
  skills: array()
    .of(object({ item: object({ id: string(), name: string() }), percent: number() }))
    .required(),
  characteristics: array()
    .of(object({ item: object({ id: string(), name: string() }), percent: number() }))
    .required(),
  date: date(),
  time: date(),
  habit: boolean(),
  simple: boolean(),
  important: boolean(),
  repeat: object({
    period: mixed<RepeatPeriod>().oneOf(Object.values(RepeatPeriod)),
    count: number(),
    days: mixed<DayOfWeek>().oneOf(Object.values(DayOfWeek)),
  }).optional(),
  asignee: object({
    id: string(),
    name: string(),
  }).optional(),
});
