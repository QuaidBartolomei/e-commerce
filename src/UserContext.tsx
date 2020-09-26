import React, { useReducer, useEffect, useState } from 'react';
import { createContext } from 'react';
import CartItemData from 'interfaces/ShopItemData.interface';
import { auth } from 'utils/firebase.utils';
import { signInWithGoogle } from 'utils/firebase.utils';
import { hatData } from 'data/ShopItems';

type Action =
  | { type: 'add_item'; payload: CartItemData }
  | { type: 'login' }
  | { type: 'logout' }
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
      signInWithGoogle();
      return state;
    }
    case 'logout': {
      auth.signOut();
      return state;
    }
    default: {
      throw new Error(`Unhandled action type`);
    }
  }
}

let defaultCart: CartItemData[] = [
  {
    name: 'Dumb item',
    id: '1',
    imageUrl: hatData[0].imageUrl,
    price: 99,
    quantity: 1,
  },
];

export const UserProvider: React.FC = (props) => {
  const [isAuth, setIsAuth] = useState(false);
  const [state, dispatch] = useReducer(userReducer, {
    isAuth,
    shoppingCart: defaultCart,
  });

  useEffect(() => {
    let unsub = auth.onAuthStateChanged((user) => {
      if (user) {
        // User is signed in.
        // var displayName = user.displayName;
        // var email = user.email;
        // var emailVerified = user.emailVerified;
        // var photoURL = user.photoURL;
        // var isAnonymous = user.isAnonymous;
        // var uid = user.uid;
        // var providerData = user.providerData;
        // ...
        setIsAuth(true);
      } else {
        // User is signed out.
        // ...
        setIsAuth(false);
      }
    });
    return () => {
      unsub();
    };
  }, []);

  return (
    <UserStateContext.Provider value={{ ...state, isAuth }}>
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
