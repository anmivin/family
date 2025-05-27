import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { fetchKino } from './lists.fetchers';
import { ListSliceProps, initialState } from './lists.types';
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
        console.log('reducer', action);
        state.pendingMovieList = false;
        state.errorMovieList = '';
        state.movieList = action.payload;
      }),
      builder.addCase(fetchKino.rejected, (state, action: PayloadAction<unknown>) => {
        state.pendingMovieList = false;
        state.errorMovieList = action.payload as string;
      });
  },
});

export const {} = listSlice.actions;

export default listSlice.reducer;
