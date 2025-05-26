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

    setIsSkillFormOpen: (state, action: PayloadAction<boolean>) => {
      state.isSkillFormOpen = action.payload;
    },
  },
});

export const { setIsTaskFormOpen, setIsQrCodeOpen, setIsSkillFormOpen } = modalsSlice.actions;

export default modalsSlice.reducer;
