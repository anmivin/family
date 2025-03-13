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
    textfieldLabel: string;
    labels: { zero?: string; one?: string; two?: string; few?: string; many?: string; other: string };
  }
> = {
  [Period.Hour]: {
    textfieldLabel: 'Ежечасно',
    labels: { one: 'час', two: 'часа', few: 'часа', other: 'часов' },
  },
  [Period.Day]: { textfieldLabel: 'Ежедневно', labels: { one: 'день', two: 'дня', few: 'дня', other: 'дней' } },
  [Period.Week]: {
    textfieldLabel: 'Еженедельно',
    labels: { one: 'неделю', two: 'недели', few: 'недели', other: 'недель' },
  },
  [Period.Month]: {
    textfieldLabel: 'Ежемесячно',
    labels: { one: 'месяц', two: 'месяца', few: 'месяца', other: 'месяцев' },
  },
  [Period.Year]: { textfieldLabel: 'Ежегодно', labels: { one: 'год', two: 'года', few: 'года', other: 'лет' } },
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
  /*   year?: boolean; */
  habit?: boolean;
  /*   important?: boolean; */
  /*   subtasks: SubtaskProps[];
  repeat?: { period: Period; count: number }; */
  asignee?: { id: string; name: string };
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
  /*   year: boolean(), */
  habit: boolean(),
  /*   important: boolean(), */
  /*   subtasks: array()
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
  }).optional(), */
  asignee: object({
    id: string().required(),
    name: string().required(),
  }).optional(),
});
