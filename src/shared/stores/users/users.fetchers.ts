import { createAsyncThunk } from '@reduxjs/toolkit';

import { axiosInstance } from '@api/axiosInstance';

const fetchUserAbilities = createAsyncThunk('user/abilities', async (_, thunkApi) => {
  try {
    const response = await axiosInstance.get('/lists/abilities');
    return response.response;
  } catch (e) {
    return thunkApi.rejectWithValue(e);
  }
});

const fetchUserInfo = createAsyncThunk('user/me', async (_, thunkApi) => {
  try {
    const response = await axiosInstance.get('/auth/me');
    await thunkApi.dispatch(fetchUserAbilities());
    return response.response;
  } catch (e) {
    return thunkApi.rejectWithValue(e);
  }
});

export { fetchUserInfo, fetchUserAbilities };
