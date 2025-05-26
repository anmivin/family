import { OpenApiAxios } from '@web-bee-ru/openapi-axios';
import type { paths } from './Api';
import type { paths as kinoPaths } from './KinopoiskApi';
import Axios from 'axios';

const baseURL =
  import.meta.env.VITE_BACK_OR_MOCK === 'mock' ? import.meta.env.VITE_APP_URL : import.meta.env.VITE_BASE_URL;

export const axios = Axios.create({
  withCredentials: true,
  baseURL,
});

axios.interceptors.response.use(
  (response) => {
    return response.data;
  },
  (error) => {
    return Promise.reject(error);
  }
);

const kinopoiskUrl = import.meta.env.VITE_KINOPOISK_BASE_URL;
const token = import.meta.env.VITE_KINOPOISK_TOKEN;
export const kinoAxios = Axios.create({
  adapter: 'fetch',
  baseURL: kinopoiskUrl,
});

kinoAxios.interceptors.request.use((value) => {
  if (value.headers && token) {
    value.headers['X-API-KEY'] = token;
  }
  return value;
});

kinoAxios.interceptors.response.use(
  (response) => {
    return response.data;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export const axiosInstance = new OpenApiAxios<paths, 'axios'>(axios, { validStatus: 'axios' });
export const kinopoiskInstance = new OpenApiAxios<kinoPaths, 'axios'>(kinoAxios, { validStatus: 'axios' });
