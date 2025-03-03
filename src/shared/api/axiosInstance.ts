import { OpenApiAxios } from '@web-bee-ru/openapi-axios';
import type { paths, components } from './Api';
import Axios from 'axios';

const axios = Axios.create({
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

export const axiosInstance = new OpenApiAxios<paths, 'fetch'>(axios, { validStatus: 'fetch' });

export const signUp = (data: components['schemas']['CreateUserDto']) => axiosInstance.post('/users', data);
export const signIn = (data: components['schemas']['LoginInputDto']) => axiosInstance.post('/auth/login', data);
