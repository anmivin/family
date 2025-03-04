import { createAsyncThunk } from '@reduxjs/toolkit';
import { axiosInstance } from '@api/axiosInstance';
import type { components } from '@api/Api';

const fetchUserInfo = createAsyncThunk('user/me', async (_, thunkApi) => {
  try {
    const response = await axiosInstance.get('/auth/me');
    return response;
  } catch (e) {
    return thunkApi.rejectWithValue('Не удалось загрузить');
  }
});

const signIn = createAsyncThunk('user/signIn', async (data: components['schemas']['LoginInputDto'], thunkApi) => {
  try {
    console.log('sdfsf');
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
