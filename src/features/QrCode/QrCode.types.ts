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

export interface SubtaskProps {
  name: string;
  difficulty: TaskDifficulty;
}
export interface TaskFormValues {
  name: string;
  description?: string;
  difficulty: TaskDifficulty;
  target: XPTarget;
  skills: { skillId: string; percent: number }[];
  characteristics: { characteristicId: string; percent: number }[];
  date?: Date;
  time?: Date;
  year?: boolean;
  subtasks: SubtaskProps[];
  repeat?: Period | { period: Period; count: number };
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
    .of(object({ skillId: string().required(), percent: number().required() }))
    .required(),
  characteristics: array()
    .of(object({ characteristicId: string().required(), percent: number().required() }))
    .required(),
  date: date(),
  time: date(),
  year: boolean(),
  subtasks: array()
    .of(
      object({
        name: string().required(),
        difficulty: mixed<TaskDifficulty>().oneOf(Object.values(TaskDifficulty)).required(),
      })
    )
    .required(),
  repeat: mixed(),
});
