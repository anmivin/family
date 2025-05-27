import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { fetchUserInfo, fetchUserAbilities } from './users.fetchers';
import { initialState, UserSliceProps } from './users.types';

export const userSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    setUserInfo: (state, action: PayloadAction<UserSliceProps['userInfo']>) => {
      state.userInfo = action.payload;
    },
    setMainPages: (state, action: PayloadAction<UserSliceProps['mainPages']>) => {
      state.mainPages = action.payload;
    },
    setOtherPages: (state, action: PayloadAction<UserSliceProps['otherPages']>) => {
      state.otherPages = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchUserInfo.pending, (state) => {
      state.pendingUserInfo = true;
    }),
      builder.addCase(fetchUserInfo.fulfilled, (state, action: PayloadAction<any>) => {
        state.pendingUserInfo = false;
        state.errorUserInfo = '';
        state.userInfo = action.payload;
      }),
      builder.addCase(fetchUserInfo.rejected, (state, action: PayloadAction<unknown>) => {
        state.pendingUserInfo = false;
        state.errorUserInfo = action.payload as string;
      });

    builder.addCase(fetchUserAbilities.pending, (state) => {
      state.pendingAbilities = true;
    }),
      builder.addCase(fetchUserAbilities.fulfilled, (state, action: PayloadAction<any>) => {
        state.pendingAbilities = false;
        state.errorAbilities = null;
        state.userInfo = action.payload;
      }),
      builder.addCase(fetchUserAbilities.rejected, (state, action: PayloadAction<unknown>) => {
        state.pendingAbilities = false;
        state.errorAbilities = action.payload as string;
      });
  },
});

export const { setUserInfo, setMainPages, setOtherPages } = userSlice.actions;

export default userSlice.reducer;
