import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { platformAPI } from 'services/PlatformsService';
import gameReducer from './reducers/GameSlice';
const rootReducer = combineReducers({
  gameReducer,
  [platformAPI.reducerPath]: platformAPI.reducer,
});

export const setupStore = () => {
  return configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(platformAPI.middleware),
  });
};

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore['dispatch'];
