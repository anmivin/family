import { createAsyncThunk } from '@reduxjs/toolkit';
import { axiosInstance } from '@api/axiosInstance';
import type { components } from '@api/Api';
import { defaultFetcher } from '@helpers/fetcher';
const fetchUserInfo = createAsyncThunk('user/me', async (_, thunkApi) => {
  try {
    const response = await defaultFetcher('/auth/me', { type: 'get' });
    return response;
  } catch (e) {
    return thunkApi.rejectWithValue(e);
  }
});

const signIn = createAsyncThunk('user/signIn', async (data: components['schemas']['LoginInputDto'], thunkApi) => {
  try {
    const response = await axiosInstance.post('/auth/login', data);
    await thunkApi.dispatch(fetchUserInfo());
    return response;
  } catch (e) {
    return thunkApi.rejectWithValue('Не удалось загрузить');
  }
});

const signUp = createAsyncThunk('user/signUp', async (data: components['schemas']['CreateUserDto'], thunkApi) => {
  try {
    const response = await axiosInstance.post('/auth/signup', data);
    await thunkApi.dispatch(fetchUserInfo());
    return response;
  } catch (e) {
    return thunkApi.rejectWithValue('Не удалось загрузить');
  }
});

export { fetchUserInfo, signIn, signUp };
