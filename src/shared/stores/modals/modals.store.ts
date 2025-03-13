import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { initialState } from './modals.types';

export const modalsSlice = createSlice({
  name: 'modals',
  initialState,
  reducers: {
    setIsTaskFormOpen: (state, action: PayloadAction<boolean>) => {
      state.isTaskFormOpen = action.payload;
    },

    setIsQrCodeOpen: (state, action: PayloadAction<boolean>) => {
      state.isQrCodeOpen = action.payload;
    },
  },
});

export const { setIsTaskFormOpen, setIsQrCodeOpen } = modalsSlice.actions;

export default modalsSlice.reducer;
