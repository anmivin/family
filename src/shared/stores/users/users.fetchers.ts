import { createAsyncThunk } from '@reduxjs/toolkit';

import { axiosInstance } from '@api/axiosInstance';
const isMock = import.meta.env.VITE_BACK_OR_MOCK === 'mock';
const fetchUserInfo = createAsyncThunk('user/me', async (_, thunkApi) => {
  try {
    const response = await axiosInstance.get('/auth/me');
    return isMock ? response.response : response;
  } catch (e) {
    return thunkApi.rejectWithValue(e);
  }
});

export { fetchUserInfo };
