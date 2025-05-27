import { axiosInstance } from '@shared/api/axiosInstance';
import { KeyType, DataType, ParamType } from '@shared/swr/SwrContext';
import { components } from '@shared/api/Api';

export type DefaultFetcherProps<T extends KeyType> = { url: T } & ParamType<T>;

export const defaultSwrFetcher = async <Key extends KeyType>(
  props: DefaultFetcherProps<Key>
): Promise<DataType<Key>> => {
  const { url, ...rest } = props;

  return (await axiosInstance.get(url as KeyType, rest)).response.data as DataType<Key>;
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

export const editTask = async (data: components['schemas']['InputEditTaskDto']) => {
  const response = await axiosInstance.patch('/tasks/{id}', data, { params: { id: data.id } });
  return response;
};
