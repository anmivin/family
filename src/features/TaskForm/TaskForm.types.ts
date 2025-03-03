import { object, string, mixed, number, date, boolean, array } from 'yup';
import { TaskDifficulty } from '@helpers/calcLavel';

export enum XPTarget {
  Skill = 'Skill',
  Characteristic = 'Characteristic',
}

export enum Period {
  Hour = 'Hour',
  Day = 'Day',
  Week = 'Week',
  Month = 'Month',
  Year = 'Year',
}

export const PeriodLabels: Record<
  Period,
  {
    labels: { zero?: string; one?: string; two?: string; few?: string; many?: string; other: string };
    every: { zero?: string; one?: string; two?: string; few?: string; many?: string; other: string };
  }
> = {
  [Period.Hour]: {
    labels: { one: 'час', two: 'часа', few: 'часа', other: 'часов' },
    every: { one: 'Каждый', other: 'Каждые' },
  },
  [Period.Day]: {
    labels: { one: 'день', two: 'дня', few: 'дня', other: 'дней' },
    every: { one: 'Каждый', other: 'Каждые' },
  },
  [Period.Week]: {
    labels: { one: 'неделю', two: 'недели', few: 'недели', other: 'недель' },
    every: { one: 'Каждую', other: 'Каждые' },
  },
  [Period.Month]: {
    labels: { one: 'месяц', two: 'месяца', few: 'месяца', other: 'месяцев' },
    every: { one: 'Каждый', other: 'Каждые' },
  },
  [Period.Year]: {
    labels: { one: 'год', two: 'года', few: 'года', other: 'лет' },
    every: { one: 'Каждый', other: 'Каждые' },
  },
};
export interface SubtaskProps {
  name: string;
  difficulty: TaskDifficulty;
}
export interface TaskFormValues {
  name: string;
  description?: string;
  difficulty: TaskDifficulty;
  target: XPTarget;
  skills: { item: { id?: string; name?: string }; percent?: number }[];
  characteristics: { item: { id?: string; name?: string }; percent?: number }[];
  date?: Date;
  time?: Date;
  year?: boolean;
  habit?: boolean;
  important?: boolean;
  subtasks: SubtaskProps[];
  repeat?: { period: Period; count: number };
}

export interface TaskFormProps {
  selectedTask: TaskFormValues;
}

export const TaskFormSchema = object({
  name: string().required(),
  description: string(),
  difficulty: mixed<TaskDifficulty>().oneOf(Object.values(TaskDifficulty)).required(),
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
  subtasks: array()
    .of(
      object({
        name: string().required(),
        difficulty: mixed<TaskDifficulty>().oneOf(Object.values(TaskDifficulty)).required(),
      })
    )
    .required(),
  repeat: object({
    period: mixed<Period>().oneOf(Object.values(Period)).required(),
    count: number().required(),
  }).optional(),
});
