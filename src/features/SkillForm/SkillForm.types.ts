import { object, string, number, array } from 'yup';

export interface TaskFormValues {
  name: string;
  description?: string;
  features: { item: { id: string; name: string }; percent: number }[];
}

export const TaskFormSchema = object({
  name: string().required('обязательно'),
  description: string(),
  features: array()
    .of(object({ item: object({ id: string().required(), name: string().required() }), percent: number().required() }))
    .test('100-percent', 'надо сто', (val) => {
      return val?.reduce((acc, curr) => acc + curr.percent, 0) === 100;
    })
    .required(),
});
