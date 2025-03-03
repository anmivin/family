import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface UserSliceProps {
  userInfo: any;
}

const initialState: UserSliceProps = {
  userInfo: null,
};

export const userSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    setUserInfo: (state, action: PayloadAction<UserSliceProps['userInfo']>) => {
      state.userInfo = action.payload;
    },
  },
});

export const { setUserInfo } = userSlice.actions;

export default userSlice.reducer;
