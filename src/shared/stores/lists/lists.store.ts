import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { ListSliceProps, initialState } from './lists.types';
export const listSlice = createSlice({
  name: 'lists',
  initialState,
  reducers: {
    setSelectedSkill: (state, action: PayloadAction<ListSliceProps['selectedSkill']>) => {
      state.selectedSkill = action.payload;
    },
  },
});

export const {} = listSlice.actions;

export default listSlice.reducer;
