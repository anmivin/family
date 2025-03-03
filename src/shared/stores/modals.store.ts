import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface ModalsSliceProps {
  isTaskFormOpen: boolean;
  isQrCodeOpen: boolean;
}

const initialState: ModalsSliceProps = {
  isTaskFormOpen: false,
  isQrCodeOpen: false,
};

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
