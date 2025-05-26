import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { initialState, TasksSliceProps } from './tasks.types';

export const taskSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    setSelectedTask: (state, action: PayloadAction<TasksSliceProps['selectedTaskId']>) => {
      state.selectedTaskId = action.payload;
    },
    setTaskStatus: (state, action: PayloadAction<TasksSliceProps['taskStatus']>) => {
      state.taskStatus = action.payload;
    },
    setTaskTypes: (state, action: PayloadAction<TasksSliceProps['taskType']>) => {
      state.taskType = action.payload;
    },
  },
});

export const { setSelectedTask, setTaskStatus, setTaskTypes } = taskSlice.actions;

export default taskSlice.reducer;
