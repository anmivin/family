import { createAsyncThunk } from '@reduxjs/toolkit';
import { axiosInstance } from '@api/axiosInstance';
import type { components } from '@api/Api';
import { useAppDispatch } from '@stores/global.store';
import { defaultFetcher } from '@helpers/fetcher';
import { TasksSliceProps } from './tasks.types';

const fetchTasks = createAsyncThunk('tasks/get', async (data?: TasksSliceProps['taskTypes']) => {
  try {
    const response = await defaultFetcher('/tasks', { type: 'get', params: data });
    return response;
  } catch (e) {}
});

const fetchTask = createAsyncThunk('task/get', async (taskId: string) => {
  try {
    const response = await defaultFetcher(`/tasks/${taskId}` as `/tasks/{id}`, { type: 'get' });
    return response;
  } catch (e) {}
});

const createTask = createAsyncThunk(
  'tasks/createTask',
  async (data: components['schemas']['InputCreateTaskDto'], thunkApi) => {
    try {
      const response = await axiosInstance.post('/tasks', data);
      await thunkApi.dispatch(fetchTasks());
      return response.data;
    } catch (e) {}
  }
);

const updateTask = createAsyncThunk('tasks/updateTask', async (data: components['schemas']['CreateUserDto']) => {
  const dispatch = useAppDispatch();
  try {
    const response = await axiosInstance.post('/auth/signup', data);
    await dispatch(fetchTasks());
    return response.data;
  } catch (e) {}
});

const updateTaskStatus = createAsyncThunk(
  'tasks/updateTaskStatus',
  async (data: components['schemas']['InputEditTaskDto'], thunkApi) => {
    const dispatch = useAppDispatch();
    try {
      const response = await axiosInstance.patch('/tasks/updateStatus', data);
      await dispatch(fetchTasks());
      return response.data;
    } catch (e) {
      return thunkApi.rejectWithValue('Не удалось загрузить');
    }
  }
);

export { fetchTasks, fetchTask, createTask, updateTask, updateTaskStatus };
