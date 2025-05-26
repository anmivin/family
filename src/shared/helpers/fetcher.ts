import { axiosInstance } from '@api/axiosInstance';
import { KeyType, DataType } from '../swr/SwrContext';
import { components } from '@api/Api';

export type DefaultFetcherProps<Key extends KeyType = KeyType> = {
  url: Key;
  options?: { params?: any; query?: any };
};

export const defaultSwrFetcher = async <Key extends KeyType>({
  url,
  options,
}: DefaultFetcherProps<Key>): Promise<DataType<Key>> => {
  const defaultOptions = { params: undefined, query: undefined };
  const { params, query } = options || defaultOptions;
  return axiosInstance.get(url as any, { params, query });
};

export const signIn = async (data: components['schemas']['LoginInputDto']) => {
  await axiosInstance.post('/auth/login', data);
};

export const signUp = async (data: components['schemas']['CreateUserDto']) => {
  await axiosInstance.post('/auth/signup', data);
};

export const createTask = async (data: components['schemas']['InputCreateTaskDto']) => {
  const response = await axiosInstance.post('/tasks', data);
  return response;
};

export const completeTask = async (data: string) => {
  const response = await axiosInstance.patch('/tasks/{id}', undefined, { params: { id: data } });
  return response;
};

export const updateTaskStatus = async (data: components['schemas']['InputEditTaskDto']) => {
  const response = await axiosInstance.patch('/tasks/updateStatus', data);
  return response;
};
