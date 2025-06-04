import { object, string } from 'yup';

export interface MovieSearchTabProps {
  search: string;
}

export const MovieSearchTabSchema = object({
  search: string().required(),
});
