import { createAsyncThunk } from '@reduxjs/toolkit';
import { axiosInstance } from '@api/axiosInstance';
import type { components } from '@api/Api';
import { useAppDispatch } from '@stores/global.store';

const fetchTasks = createAsyncThunk('tasks/get', async (data?: components['schemas']) => {
  try {
    const response = await axiosInstance.get('/tasks', data);
    return response;
  } catch (e) {}
});

const createTask = createAsyncThunk(
  'tasks/createTask',
  async (data: components['schemas']['CreateTaskDto'], thunkApi) => {
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
  async (data: components['schemas']['UpdateStatusTaskDto'], thunkApi) => {
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

export { fetchTasks, createTask, updateTask, updateTaskStatus };
