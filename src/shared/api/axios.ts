import { OpenApiAxios } from '@web-bee-ru/openapi-axios';
import type { paths } from './Api';
import Axios from 'axios';

const axios = Axios.create({
  baseURL: '/api',
  adapter: 'fetch',
});

export const api = new OpenApiAxios<paths, 'fetch'>(axios, { validStatus: 'fetch' });

const getTasks = api.get('/tasks', {userId: '',
  types: {
    isImportant: boolean;
    isActive: boolean;
    isCompleted: boolean;
    isApproving: boolean;
    isDeclined: boolean;
    isHoliday: boolean;
    isHabit: boolean;
    isYear: boolean;
}})
const createTask = api.post('/tasks', {
  name: '',
  difficulty: "Easy",
  userId: '',
  description:  '',
  types: components["schemas"]["TaskTypeDto"];
  date:  '',
  time: boolean;
  year: boolean;
  subtasks: components["schemas"]["SubtaskDto"][];
  repeat: components["schemas"]["PeriodDto"];
  skills: components["schemas"]["PercentDto"][];
  features: components["schemas"]["PercentDto"][];
})