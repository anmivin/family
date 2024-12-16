import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface ModalsSliceProps {
  isTaskFormOpen: boolean;
}

const initialState: ModalsSliceProps = {
  isTaskFormOpen: false,
};

export const modalsSlice = createSlice({
  name: 'modals',
  initialState,
  reducers: {
    setIsTaskFormOpen: (state, action: PayloadAction<boolean>) => {
      state.isTaskFormOpen = action.payload;
    },
  },
});

export const { setIsTaskFormOpen } = modalsSlice.actions;

export default modalsSlice.reducer;
