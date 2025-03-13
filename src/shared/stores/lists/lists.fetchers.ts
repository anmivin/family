import { createAsyncThunk } from '@reduxjs/toolkit';
import { defaultFetcher } from '@helpers/fetcher';

const fetchUserFeatures = createAsyncThunk('features', async (_, thunkApi) => {
  try {
    const response = await defaultFetcher('/lists/features/user', { type: 'get' });
    return response;
  } catch (e) {
    return thunkApi.rejectWithValue('Не удалось загрузить');
  }
});

const fetchUserSkills = createAsyncThunk('user-skills', async (_, thunkApi) => {
  try {
    const response = await defaultFetcher('/lists/skills/user', { type: 'get' });
    return response;
  } catch (e) {
    return thunkApi.rejectWithValue('Не удалось загрузить');
  }
});

const fetchSkills = createAsyncThunk('skills', async (_, thunkApi) => {
  try {
    const response = await defaultFetcher('/lists/skills', { type: 'get' });
    return response;
  } catch (e) {
    return thunkApi.rejectWithValue('Не удалось загрузить');
  }
});

export { fetchUserFeatures, fetchUserSkills, fetchSkills };
