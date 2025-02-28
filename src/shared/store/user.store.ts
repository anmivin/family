import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface ModalsSliceProps {
  isTaskFormOpen: boolean;
  isLoginFormOpen: boolean;
}

const initialState: ModalsSliceProps = {
  isTaskFormOpen: false,
  isLoginFormOpen: false,
};

export const userSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    setIsTaskFormOpen: (state, action: PayloadAction<boolean>) => {
      state.isTaskFormOpen = action.payload;
    },
    setIsLoginFormOpen: (state, action: PayloadAction<boolean>) => {
      state.isTaskFormOpen = action.payload;
    },
  },
});

export const { setIsTaskFormOpen, setIsLoginFormOpen } = userSlice.actions;

export default userSlice.reducer;
