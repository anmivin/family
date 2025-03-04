import { combineReducers, configureStore } from '@reduxjs/toolkit';

import { useDispatch, useSelector, TypedUseSelectorHook } from 'react-redux';

import modalsSlice from './modals.store';
import userSlice from './users/users.store';
import taskSlice from './tasks/tasks.store';
const rootReducer = combineReducers({ modalsSlice, userSlice, taskSlice });

export const setupStore = () => {
  return configureStore({
    reducer: rootReducer,
  });
};

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore['dispatch'];
