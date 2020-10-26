import { CartItemData } from 'interfaces/shop-item.interface';
import { UserState } from 'user/user.interface';
import { defaultCart } from './UserContext';

type Action =
  | { type: 'add_item'; payload: CartItemData }
  | { type: 'login'; payload: UserState }
  | { type: 'logout' }
  | { type: 'remove_item'; payload: string }
  | { type: 'update_cart'; payload: CartItemData[] }
  | { type: 'change_item_quantity'; payload: { id: string; quantity: number } };

export function userReducer(state: UserState, action: Action): UserState {
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
      console.log('changing item quantity');
      console.log('id: ', id);
      console.log('quantity: ', quantity);
      return {
        ...state,
        cart: state.cart
          .map((x) => {
            if (x.id === id)
              return {
                ...x,
                quantity,
              };
            return x;
          })
          .filter((x) => x.quantity ),
      };
    }
    case 'login': {
      console.log('logging in', action.payload);
      return {
        ...state,
        isAuth: true,
        cart: action.payload.cart,
      };
    }
    case 'logout': {
      console.log('logging out');
      return { ...state, isAuth: false, cart: defaultCart };
    }
    default: {
      throw new Error(`Unhandled action type`);
    }
  }
}

export type UserDispatch = (action: Action) => void;
