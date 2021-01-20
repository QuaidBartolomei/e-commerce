import { getUserCart, updateCart } from 'apis/user.api';
import { CartItemData } from 'interfaces/shopItem.interface';
import React, { createContext, useEffect, useReducer } from 'react';
import { UserDispatch, userReducer } from 'user.reducer';
import firebase from 'utils/firebase.utils';
import { getIntialState, persistState } from 'utils/localStorage.utils';

const STORAGE_KEY = 'authState';

export interface UserState {
  isAuth: boolean;
  cart: CartItemData[];
}
const initialState: UserState = getIntialState(STORAGE_KEY) ?? {
  isAuth: false,
  cart: [],
};

const UserStateContext = createContext<UserState | undefined>(undefined);
const UserDispatchContext = createContext<UserDispatch | undefined>(undefined);

export const UserProvider: React.FC = (props) => {
  const [state, dispatch] = useReducer(userReducer, initialState);

  useEffect(() => persistState(STORAGE_KEY, state), [state]);

  useEffect(() => {
    const unsub = firebase.auth().onAuthStateChanged(async (user) => {
      if (!user) {
        if (state.isAuth) dispatch({ type: 'logout' });
        return;
      }
      if (state.isAuth) return;
      const cart = await getUserCart(user.uid);
      dispatch({ type: 'login', payload: cart });
    });
    return () => {
      unsub();
    };
  }, []);

  useEffect(() => {
    updateCart(state.cart);
  }, [state.cart]);

  return (
    <UserStateContext.Provider value={state}>
      <UserDispatchContext.Provider value={dispatch}>
        {props.children}
      </UserDispatchContext.Provider>
    </UserStateContext.Provider>
  );
};

export function useUserState() {
  const context = React.useContext(UserStateContext);
  if (context === undefined) {
    throw new Error('useUserState must be used within a UserProvider');
  }
  return context;
}

export function useUserDispatch() {
  const context = React.useContext(UserDispatchContext);
  if (context === undefined) {
    throw new Error('useUserDispatch must be used within a CountProvider');
  }
  return context;
}
