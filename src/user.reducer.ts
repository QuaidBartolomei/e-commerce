import { CartItem, UserState } from "UserContext";

type Action =
  | { type: 'add_item'; payload: CartItem }
  | { type: 'login'; payload: CartItem[] }
  | { type: 'logout' }
  | { type: 'remove_item'; payload: string }
  | { type: 'update_cart'; payload: CartItem[] }
  | { type: 'change_item_quantity'; payload: { id: string; quantity: number } };

export function userReducer(state: UserState, action: Action): UserState {
  switch (action.type) {
    case 'add_item': {
      let {id} = action.payload;
      let existingItem = state.cart.find((x) => x.id === id);
      if (existingItem) {
        existingItem.quantity++;
        return { ...state, cart: [...state.cart] };
      }
      return {
        ...state,
        cart: [...state.cart, action.payload],
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
        cart: action.payload,
      };
    }
    case 'logout': {
      console.log('logging out');
      return { ...state, isAuth: false, cart: [] };
    }
    default: {
      throw new Error(`Unhandled action type`);
    }
  }
}

export type UserDispatch = (action: Action) => void;
