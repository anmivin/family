import type { RootState } from './global.store';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface SkillsInterface {
  id: string;
  name: string;
}

interface CharacteristicsInterface {
  id: string;
  name: string;
}
// Define a type for the slice state
interface DbSliceProps {
  skills: SkillsInterface[];
  characteristics: CharacteristicsInterface[];
}

// Define the initial state using that type
const initialState: DbSliceProps = {
  skills: [],
  characteristics: [],
};

export const dbSlice = createSlice({
  name: 'db',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    // Use the PayloadAction type to declare the contents of `action.payload`
    incrementByAmount: (state, action: PayloadAction<number>) => {
      state.value += action.payload;
    },
  },
});

export const { increment, decrement, incrementByAmount } = counterSlice.actions;

// Other code such as selectors can use the imported `RootState` type
export const selectCount = (state: RootState) => state.counter.value;

export default counterSlice.reducer;
