import { combineReducers, configureStore } from '@reduxjs/toolkit';
import gameReducer from './reducers/GameSlice';
import userReducer from './reducers/UserSlice';
import pageReducer from './reducers/PageSlice';
import dataReducer from './reducers/DataSlice';
import searchReducer from './reducers/SearchSlice';

const rootReducer = combineReducers({
  gameReducer,
  userReducer,
  pageReducer,
  dataReducer,
  searchReducer,
});

export const setupStore = () => {
  return configureStore({
    reducer: rootReducer,
  });
};

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore['dispatch'];
