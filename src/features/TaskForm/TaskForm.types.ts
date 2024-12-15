import { object, string, mixed, number, date, boolean, array } from 'yup';

export enum TaskDifficulty {
  Easy = 'Easy',
  Medium = 'Medium',
  Challenging = 'Challenging',
  Exceptional = 'Exceptional',
}

export interface SubtaskProps {
  name: string;
  difficulty: TaskDifficulty;
}
export interface TaskFormValues {
  name: string;
  description?: string;
  difficulty: TaskDifficulty;
  trait: { id: string; percent: number };
  date?: Date;
  year?: boolean;
  subtasks: SubtaskProps[];
}

export interface TaskFormProps {
  selectedTask: TaskFormValues;
}

export const TaskFormSchema = object({
  name: string().required(),
  description: string(),
  difficulty: mixed<TaskDifficulty>().oneOf(Object.values(TaskDifficulty)).required(),
  trait: object({ id: string().required(), percent: number().required() }),
  date: date(),
  year: boolean(),
  subtasks: array()
    .of(
      object({
        name: string().required(),
        difficulty: mixed<TaskDifficulty>().oneOf(Object.values(TaskDifficulty)).required(),
      })
    )
    .required(),
});
