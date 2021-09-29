import { Middleware } from '@reduxjs/toolkit';
import { persistState } from 'utils/localStorage.utils';
import { STORAGE_KEY } from './store';

export const persistStateMiddleware: Middleware = storeAPI => next => action => {
  const oldState = storeAPI.getState();
  const result = next(action);
  const newState = storeAPI.getState();
  const stateDidChange = oldState !== newState;
  if (stateDidChange) persistState(STORAGE_KEY, newState);
  return result;
};
