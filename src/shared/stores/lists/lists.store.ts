import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { fetchUserFeatures, fetchSkills, fetchUserSkills } from './lists.fetchers';

import { ListSliceProps, initialState } from './lists.types';
export const listSlice = createSlice({
  name: 'lists',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchUserFeatures.pending, (state) => {
      state.pendingUserFeatures = true;
    }),
      builder.addCase(fetchUserFeatures.fulfilled, (state, action: PayloadAction<ListSliceProps['userFeatures']>) => {
        state.pendingUserFeatures = false;
        state.errorUserFeatures = '';
        state.userFeatures = action.payload;
        state.featureList = action.payload.flatMap(({ children }) =>
          children.map((child) => ({ id: child.id, name: child.name }))
        );
      }),
      builder.addCase(fetchUserFeatures.rejected, (state, action: PayloadAction<unknown>) => {
        state.pendingUserFeatures = false;
        state.errorUserFeatures = action.payload as string;
      });

    builder.addCase(fetchUserSkills.pending, (state) => {
      state.pendingUserSkills = true;
    }),
      builder.addCase(fetchUserSkills.fulfilled, (state, action: PayloadAction<any>) => {
        state.pendingUserSkills = false;
        state.errorUserSkills = '';
        state.userSkills = action.payload;
      }),
      builder.addCase(fetchUserSkills.rejected, (state, action: PayloadAction<unknown>) => {
        state.pendingUserSkills = false;
        state.errorUserSkills = action.payload as string;
      });

    builder.addCase(fetchSkills.pending, (state) => {
      state.pendingSkillList = true;
    }),
      builder.addCase(fetchSkills.fulfilled, (state, action: PayloadAction<any>) => {
        state.pendingSkillList = false;
        state.errorSkillList = '';
        state.skillList = action.payload;
      }),
      builder.addCase(fetchSkills.rejected, (state, action: PayloadAction<unknown>) => {
        state.pendingSkillList = false;
        state.errorSkillList = action.payload as string;
      });
  },
});

export const {} = listSlice.actions;

export default listSlice.reducer;
