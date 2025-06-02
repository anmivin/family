import { createAsyncThunk } from '@reduxjs/toolkit';

import { kinopoiskInstance } from '@shared/api/axiosInstance';

const fetchKino = createAsyncThunk('lists/kino', async (data: string, thunkApi) => {
  try {
    const response = await kinopoiskInstance.get('/v1.4/movie/search', { query: { query: data } });

    return response.data;
  } catch (e) {
    return thunkApi.rejectWithValue(e);
  }
});

export { fetchKino };
