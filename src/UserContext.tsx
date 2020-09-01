import React, { useReducer, useEffect } from 'react';
import { createContext } from 'react';
import CartItemData from 'interfaces/ShopItemData.interface';
import { auth } from 'firebase.utils';
import { ShopItemData } from 'pages/Shop/Shop';

type Action =
  | { type: 'add_item'; payload: CartItemData }
  | { type: 'login' }
  | { type: 'remove_item'; payload: string };
type Dispatch = (action: Action) => void;
type State = {
  isAuth: boolean;
  shoppingCart: CartItemData[];
};

const UserStateContext = createContext<State | undefined>(undefined);
const UserDispatchContext = createContext<Dispatch | undefined>(undefined);

function userReducer(state: State, action: Action): State {
  switch (action.type) {
    case 'add_item': {
      let item = action.payload;
      let existingItem = state.shoppingCart.find((x) => x.id === item.id);
      if (existingItem) {
        existingItem.quantity++;
        return { ...state };
      }
      return {
        ...state,
        shoppingCart: [...state.shoppingCart, { ...item, quantity: 1 }],
      };
    }
    case 'remove_item': {
      return {
        ...state,
        shoppingCart: state.shoppingCart.filter((x) => x.id !== action.payload),
      };
    }
    case 'login': {
      return { ...state, isAuth: true };
    }
    default: {
      throw new Error(`Unhandled action type`);
    }
  }
}

export const UserProvider: React.FC = (props) => {
  const [state, dispatch] = useReducer(userReducer, {
    isAuth: false,
    shoppingCart: [],
  });

  useEffect(() => {
    let unsub = auth.onAuthStateChanged((userAuth) => {
      console.log('user auth: ', userAuth);
      dispatch({ type: 'login' });
    });
    return () => {
      unsub();
    };
  }, []);

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
