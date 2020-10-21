import CartItemData from 'interfaces/ShopItemData.interface';
import React, { createContext, useEffect, useReducer } from 'react';
import shortid from 'shortid';
import { UserState } from 'user/user.interface';
import { UserDispatch, userReducer } from 'user/user.reducer';
import { getUserData, updateCart } from 'utils/db.utils';
import { auth } from 'utils/firebase.utils';
import { getIntialState, persistState } from 'utils/localStorage.utils';

const STORAGE_KEY = 'authState';

export const defaultCart: CartItemData[] = [
  {
    name: 'Dumb item',
    id: shortid.generate(),
    imageUrl:
      'https://firebasestorage.googleapis.com/v0/b/e-commerce-a8505.appspot.com/o/black-shirt.jpg?alt=media&token=c3f58f4b-df5d-491c-944c-c8c2238397df',
    price: 99,
    quantity: 1,
    category: 'Hat',
    size: 'S',
  },
  {
    name: 'Dumb item',
    id: shortid.generate(),
    imageUrl:
      'https://firebasestorage.googleapis.com/v0/b/e-commerce-a8505.appspot.com/o/black-shirt.jpg?alt=media&token=c3f58f4b-df5d-491c-944c-c8c2238397df',
    price: 99,
    quantity: 1,
    category: 'Hat',
    size: 'S',
  },
];

const defaultState: UserState = {
  isAuth: false,
  cart: [],
};
const initialState: UserState = getIntialState(STORAGE_KEY) ?? defaultState;

const UserStateContext = createContext<UserState | undefined>(undefined);
const UserDispatchContext = createContext<UserDispatch | undefined>(undefined);

export const UserProvider: React.FC = (props) => {
  const [state, dispatch] = useReducer(userReducer, initialState);

  useEffect(() => {
    let unsub = auth.onAuthStateChanged(async (user) => {
      if (user) {
        if (state.isAuth ) return; 
        let data = await getUserData(user.uid);
        dispatch({ type: 'login', payload: data });
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
  
  useEffect(() => persistState(STORAGE_KEY, state), [state]);

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
