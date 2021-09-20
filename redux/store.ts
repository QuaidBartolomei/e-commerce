import { Action, configureStore, ThunkAction } from '@reduxjs/toolkit';
import { getLocalStorage } from 'utils/localStorage.utils';
import userSlice from 'features/user/userSlice';

const STORAGE_KEY = 'store';

export const getStore = () => {
  return configureStore({
    reducer: {
      user: userSlice,
    },
    preloadedState: getLocalStorage(STORAGE_KEY) ?? {},
  });
};

const store = configureStore({
  reducer: {
    user: userSlice,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
