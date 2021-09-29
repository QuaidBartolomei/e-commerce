import {
  Action,
  combineReducers,
  configureStore,
  ThunkAction,
} from '@reduxjs/toolkit';
import cartSlice from 'features/cart/cartPageSlice';
import userSlice from 'features/user/userSlice';
import { getLocalStorage } from 'utils/localStorage.utils';
import { persistStateMiddleware } from './persistStateMiddleware';

export const STORAGE_KEY = 'store';

export const store = configureStore({
  reducer: combineReducers({
    user: userSlice,
    cartPage: cartSlice,
  }),
  preloadedState: getLocalStorage(STORAGE_KEY) ?? {},
  middleware: [persistStateMiddleware],
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
