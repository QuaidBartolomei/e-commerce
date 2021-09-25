import {
  Action,
  combineReducers,
  configureStore,
  Middleware,
  ThunkAction,
} from '@reduxjs/toolkit';
import cartSlice, { cartPageSlice } from 'features/cart/cartSlice';
import userSlice from 'features/user/userSlice';
import { getLocalStorage, persistState } from 'utils/localStorage.utils';

const STORAGE_KEY = 'store';

const persistStateMiddleware: Middleware = storeAPI => next => action => {
  const oldState = storeAPI.getState();
  const result = next(action);
  const newState = storeAPI.getState();
  const stateDidChange = oldState !== newState;
  if (stateDidChange) persistState(STORAGE_KEY, newState);
  return result;
};

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
