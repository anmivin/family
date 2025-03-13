import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { fetchTasks, fetchTask } from './tasks.fetchers';
import { initialState, TasksSliceProps } from './tasks.types';

export const taskSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    setSelectedTask: (state, action: PayloadAction<TasksSliceProps['selectedTask']>) => {
      state.selectedTask = action.payload;
    },
    setTaskTypes: (state, action: PayloadAction<TasksSliceProps['taskTypes']>) => {
      state.taskTypes = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchTasks.pending, (state) => {
      state.pendingUserTasks = true;
    }),
      builder.addCase(fetchTasks.fulfilled, (state, action: PayloadAction<any>) => {
        state.pendingUserTasks = false;
        state.errorUserTasks = '';
        state.userTasks = action.payload;
      }),
      builder.addCase(fetchTasks.rejected, (state, action: PayloadAction<unknown>) => {
        state.pendingUserTasks = false;
        state.errorUserTasks = action.payload as string;
      });

    builder.addCase(fetchTask.pending, (state) => {
      state.pendingSelectedTask = true;
    }),
      builder.addCase(fetchTask.fulfilled, (state, action: PayloadAction<any>) => {
        state.pendingSelectedTask = false;
        state.errorSelectedTask = '';
        state.selectedTask = action.payload;
      }),
      builder.addCase(fetchTask.rejected, (state, action: PayloadAction<unknown>) => {
        state.pendingSelectedTask = false;
        state.errorSelectedTask = action.payload as string;
      });
  },
});

export const { setSelectedTask, setTaskTypes } = taskSlice.actions;

export default taskSlice.reducer;
