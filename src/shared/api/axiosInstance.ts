import { OpenApiAxios } from '@web-bee-ru/openapi-axios';
import type { paths } from './Api';
import Axios from 'axios';

export const axios = Axios.create({
  adapter: 'fetch',
});

axios.defaults.baseURL = import.meta.env.VITE_BASE_URL;
axios.defaults.withCredentials = true;

axios.interceptors.response.use(
  (response) => {
    return response.data;
  },
  (error) => {
    // if (error.response.status === 403) {
    // неавторизован
    // }
    return Promise.reject(error);
  }
);

export const axiosInstance = new OpenApiAxios<paths, 'axios'>(axios, { validStatus: 'axios' });
