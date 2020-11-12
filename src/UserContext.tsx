import React, { createContext, useEffect, useReducer } from 'react';
import { UserDispatch, userReducer } from 'models/user/user.reducer';
import { getIntialState, persistState } from 'utils/localStorage.utils';
import { CartItemModel, getUserCart, updateCart } from './models/user/user.db';
import { ShopItemModel } from 'models/shop-item/shop-item.db';
import firebase from 'utils/firebase.utils';

const STORAGE_KEY = 'authState';

export type CartItem = CartItemModel & ShopItemModel;
export interface UserState {
  isAuth: boolean;
  cart: CartItem[];
}

const defaultState: UserState = {
  isAuth: false,
  cart: [],
};
const initialState: UserState = getIntialState(STORAGE_KEY) ?? defaultState;

const UserStateContext = createContext<UserState | undefined>(undefined);
const UserDispatchContext = createContext<UserDispatch | undefined>(undefined);

export const UserProvider: React.FC = (props) => {
  const [state, dispatch] = useReducer(userReducer, initialState);

  useEffect(() => persistState(STORAGE_KEY, state), [state]);

  useEffect(() => {
    let unsub = firebase.auth().onAuthStateChanged(async (user) => {
      if (user) {
        if (state.isAuth) return;
        let cart = await getUserCart(user.uid);
        dispatch({ type: 'login', payload: cart });
      } else {
        // User is signed out.
        if (state.isAuth) dispatch({ type: 'logout' });
      }
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
