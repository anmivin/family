import { createAsyncThunk } from '@reduxjs/toolkit';

import { kinopoiskInstance, booksInstance } from '@shared/api/axiosInstance';
const booksKey = import.meta.env.VITE_GOOGLEBOOKS_APIKEY;

const fetchKino = createAsyncThunk('lists/kino', async (data: string, thunkApi) => {
  try {
    const response = await kinopoiskInstance.get('/v1.4/movie/search', { query: { query: data } });

    return response.data;
  } catch (e) {
    return thunkApi.rejectWithValue(e);
  }
});

const fetchBooks = createAsyncThunk('lists/book', async (data: string, thunkApi) => {
  try {
    const response = await booksInstance.get(
      `volumes?q=${encodeURIComponent(data)}${booksKey ? `&key=${booksKey}` : ''}`
    );

    return response.data;
  } catch (e) {
    return thunkApi.rejectWithValue(e);
  }
});

export { fetchKino, fetchBooks };
