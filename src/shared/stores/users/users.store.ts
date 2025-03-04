import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { fetchUserInfo } from './users.fetchers';
import { initialState, UserSliceProps } from './users.types';

export const userSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    setUserInfo: (state, action: PayloadAction<UserSliceProps['userInfo']>) => {
      console.log('setUserInfo', action);
      state.userInfo = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchUserInfo.pending, (state) => {
      console.log('pending');
      state.pendingUserInfo = true;
    }),
      builder.addCase(fetchUserInfo.fulfilled, (state, action: PayloadAction<any>) => {
        console.log('fulfilled', action);
        state.pendingUserInfo = false;
        state.errorUserInfo = '';
        state.userInfo = action.payload.response;
      }),
      builder.addCase(fetchUserInfo.rejected, (state, action: PayloadAction<unknown>) => {
        console.log('rejected', action);
        state.pendingUserInfo = false;
        state.errorUserInfo = action.payload as string;
      });
  },
});

export const { setUserInfo } = userSlice.actions;

export default userSlice.reducer;
