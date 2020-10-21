import { CartItemData } from 'interfaces/ShopItemData.interface';
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
      console.log('logging in', action.payload);
      return {
        ...action.payload,
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
