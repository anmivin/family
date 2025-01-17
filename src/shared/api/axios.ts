import { OpenApiAxios } from '@web-bee-ru/openapi-axios';
import type { paths } from './Api';
import Axios from 'axios';

const axios = Axios.create({
  baseURL: '/api',
  adapter: 'fetch',
});

export const api = new OpenApiAxios<paths, 'fetch'>(axios, { validStatus: 'fetch' });
