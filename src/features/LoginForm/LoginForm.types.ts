import { object, string } from 'yup';

export interface LoginFormValues {
  name: string;
  email?: string;
  password: string;
  familyId?: string;
}

export const LoginFormSchema = object({
  name: string().required(),
  email: string(),
  password: string().required(),
  familyId: string(),
});
