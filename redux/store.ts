import {
  configureStore,
  ThunkAction,
  Action,
  Middleware,
} from '@reduxjs/toolkit';
import userSlice from '../features/user/userSlice';

export const Logger: Middleware = api => next => action => {
  // Do stuff
  return next(action);
};

export const store = configureStore({
  reducer: {
    user: userSlice,
  },
  middleware: [Logger],
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
