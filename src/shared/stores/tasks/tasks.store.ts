import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { fetchTasks } from './tasks.fetchers';
import { initialState } from './tasks.types';

export const taskSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchTasks.pending, (state) => {
      state.pendingUserTasks = true;
    }),
      builder.addCase(fetchTasks.fulfilled, (state, action: PayloadAction<any>) => {
        state.pendingUserTasks = false;
        state.errorUserTasks = '';
        state.userTasks = action.payload.response;
      }),
      builder.addCase(fetchTasks.rejected, (state, action: PayloadAction<unknown>) => {
        state.pendingUserTasks = false;
        state.errorUserTasks = action.payload as string;
      });
  },
});

export const {} = taskSlice.actions;

export default taskSlice.reducer;
