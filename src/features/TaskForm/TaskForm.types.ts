import { object, string, mixed, number, date, boolean, array } from 'yup';
import { Difficulty, RepeatPeriod } from '@api/Api';

export enum XPTarget {
  Skill = 'Skill',
  Characteristic = 'Characteristic',
}

export const PeriodLabels: Record<
  RepeatPeriod | 'SIMPLE',
  {
    textfieldLabel: string;
    labels?: { zero?: string; one?: string; two?: string; few?: string; many?: string; other: string };
  }
> = {
  [RepeatPeriod.HOURLY]: {
    textfieldLabel: 'Ежечасно',
    labels: { one: 'час', two: 'часа', few: 'часа', other: 'часов' },
  },
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
  SIMPLE: { textfieldLabel: 'После завершения' },
};
export interface SubtaskProps {
  name: string;
  difficulty: Difficulty;
}
export interface TaskFormValues {
  name: string;
  description?: string;
  difficulty: Difficulty;
  target: XPTarget;
  skills: { item: { id?: string; name?: string }; percent?: number }[];
  characteristics: { item: { id?: string; name?: string }; percent?: number }[];
  date?: Date;
  time?: Date;
  year?: boolean;
  habit?: boolean;
  important?: boolean;
  repeat?: { period: RepeatPeriod; count: number };
  asignee?: { id: string; name: string };
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
  year: boolean(),
  habit: boolean(),
  important: boolean(),
  repeat: object({
    period: mixed<RepeatPeriod>().oneOf(Object.values(RepeatPeriod)).required(),
    count: number().required(),
  }).optional(),
  asignee: object({
    id: string().required(),
    name: string().required(),
  }).optional(),
});
