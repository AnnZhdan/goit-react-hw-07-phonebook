import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { filterSlice } from './filterSlice';

import { phoneBookSlice } from './phoneBookSlice';

const rootReducer = combineReducers({
  contacts: phoneBookSlice.reducer,
  filter: filterSlice.reducer,
});

export const store = configureStore({
  reducer: rootReducer,
});
