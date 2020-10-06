import CartItemData, { UserData } from 'interfaces/ShopItemData.interface';
import React, { createContext, useEffect, useReducer } from 'react';
import { getUserData, updateCart } from 'utils/db.utils';
import { auth } from 'utils/firebase.utils';

let defaultCart: CartItemData[] = [
  {
    name: 'Dumb item',
    id: '1',
    imageUrl: '',
    price: 99,
    quantity: 1,
    category: 'Hat',
    size: 'S',
  },
];

type Action =
  | { type: 'add_item'; payload: CartItemData }
  | { type: 'login'; payload: UserData }
  | { type: 'logout' }
  | { type: 'remove_item'; payload: string }
  | { type: 'update_cart'; payload: CartItemData[] }
  | { type: 'change_item_quantity'; payload: { id: string; quantity: number } };
type Dispatch = (action: Action) => void;

type State = UserData;
const defaultState: State = {
  _id: '',
  cart: defaultCart,
};

const UserStateContext = createContext<State | undefined>(undefined);
const UserDispatchContext = createContext<Dispatch | undefined>(undefined);

function userReducer(state: State, action: Action): State {
  switch (action.type) {
    case 'add_item': {
      let item = action.payload;
      let existingItem = state.cart.find((x) => x.id === item.id);
      if (existingItem) {
        existingItem.quantity++;
        return { ...state, cart: [...state.cart] };
      }
      return {
        ...state,
        cart: [...state.cart, { ...item, quantity: 1 }],
      };
    }
    case 'remove_item': {
      return {
        ...state,
        cart: state.cart.filter((x) => x.id !== action.payload),
      };
    }
    case 'update_cart': {
      return {
        ...state,
        cart: action.payload,
      };
    }
    case 'change_item_quantity': {
      let { quantity, id } = action.payload;

      let index = state.cart.findIndex((x) => x.id === action.payload.id);
      if (index < 0) return { ...state };
      if (quantity === 0)
        return {
          ...state,
          cart: state.cart.filter((x) => x.id !== id),
        };
      else state.cart[index].quantity = quantity;
      return { ...state };
    }
    case 'login': {
      return {
        ...action.payload,
      };
    }
    case 'logout': {
      return { ...state, _id: '' };
    }
    default: {
      throw new Error(`Unhandled action type`);
    }
  }
}

export const UserProvider: React.FC = (props) => {
  const [state, dispatch] = useReducer(userReducer, defaultState);

  useEffect(() => {
    let unsub = auth.onAuthStateChanged(async (user) => {
      if (user) {
        let data = await getUserData(user.uid);
        dispatch({ type: 'login', payload: data });
      } else {
        // User is signed out.
        dispatch({ type: 'logout' });
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
