import { createAsyncThunk } from '@reduxjs/toolkit';
import { axiosInstance } from '@api/axiosInstance';
import type { components } from '@api/Api';
import { useAppDispatch } from '@stores/global.store';

const fetchUserInfo = createAsyncThunk('user/me', async (_, thunkApi) => {
  try {
    const response = await axiosInstance.get('/auth/me');
    return response.data;
  } catch (e) {
    return thunkApi.rejectWithValue('Не удалось загрузить');
  }
});

const signIn = createAsyncThunk('user/signIn', async (data: components['schemas']['LoginInputDto'], thunkApi) => {
  const dispatch = useAppDispatch();
  try {
    const response = await axiosInstance.post('/auth/login', data);
    await dispatch(fetchUserInfo());
    return response.data;
  } catch (e) {
    return thunkApi.rejectWithValue('Не удалось загрузить');
  }
});

const signUp = createAsyncThunk('user/signUp', async (data: components['schemas']['CreateUserDto'], thunkApi) => {
  const dispatch = useAppDispatch();
  try {
    const response = await axiosInstance.post('/auth/signup', data);
    await dispatch(fetchUserInfo());
    return response.data;
  } catch (e) {
    return thunkApi.rejectWithValue('Не удалось загрузить');
  }
});

export { fetchUserInfo, signIn, signUp };
