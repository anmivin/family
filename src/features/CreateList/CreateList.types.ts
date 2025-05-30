import { object, string, date, array } from 'yup';
export interface ListFormValues {
  title: string;
  description?: string;
  deadline?: Date;
  listItems: {
    title: string;
    description?: string;
  }[];
}

export const ListFormSchema = object({
  title: string().required(),
  description: string(),
  deadline: date(),
  listItems: array(
    object({
      title: string().required(),
      description: string(),
    })
  ).default([]),
});
