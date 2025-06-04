import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { fetchBooks, fetchKino } from './lists.fetchers';
import { ListSliceProps, initialState } from './lists.types';
import { Root } from '@shared/types/booksTypes';

export const listSlice = createSlice({
  name: 'lists',
  initialState,
  reducers: {
    setSelectedSkill: (state, action: PayloadAction<ListSliceProps['selectedSkill']>) => {
      state.selectedSkill = action.payload;
    },
  },

  extraReducers: (builder) => {
    builder.addCase(fetchKino.pending, (state) => {
      state.pendingMovieList = true;
    }),
      builder.addCase(fetchKino.fulfilled, (state, action: PayloadAction<any>) => {
        state.pendingMovieList = false;
        state.errorMovieList = '';
        state.movieList = action.payload;
      }),
      builder.addCase(fetchKino.rejected, (state, action: PayloadAction<unknown>) => {
        state.pendingMovieList = false;
        state.errorMovieList = action.payload as string;
      });

    builder.addCase(fetchBooks.pending, (state) => {
      state.pendingBookList = true;
    }),
      builder.addCase(fetchBooks.fulfilled, (state, action: PayloadAction<Root>) => {
        state.pendingBookList = false;
        state.errorBookList = '';
        state.bookList = action.payload;
      }),
      builder.addCase(fetchBooks.rejected, (state, action: PayloadAction<unknown>) => {
        state.pendingBookList = false;
        state.errorBookList = action.payload as string;
      });
  },
});

export const {} = listSlice.actions;

export default listSlice.reducer;
