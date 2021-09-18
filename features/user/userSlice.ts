import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { CartItem } from 'components/Cart/CartItem/CartItem.interface';
import { CartItemData } from 'interfaces/shopItem.interface';
import { getLocalStorage } from '../../utils/localStorage.utils';

const STORAGE_KEY = 'authState';
export interface UserState {
  isAuth: boolean;
  cart: CartItemData[];
}
const initialState: UserState = getLocalStorage(STORAGE_KEY) ?? {
  isAuth: false,
  cart: [],
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {
    addItem: (state, action: PayloadAction<CartItem>) => {
      const { id, color, size } = action.payload;
      const existingItem = state.cart.find(
        x => x.id === id && x.color === color && x.size === size
      );
      if (existingItem) {
        existingItem.quantity++;
      } else {
        state.cart.push(action.payload);
      }
    },
    removeItem: (state, action: PayloadAction<string>) => {
      return {
        ...state,
        cart: state.cart.filter(x => x.id !== action.payload),
      };
    },
    changeItemQuantity: (state, action: PayloadAction<CartItem>) => {
      const { quantity, id } = action.payload;
      return {
        ...state,
        cart: state.cart
          .map(x => {
            if (x.id === id)
              return {
                ...x,
                quantity,
              };
            return x;
          })
          .filter(x => x.quantity),
      };
    },
    login: (state, action: PayloadAction<CartItem[]>) => {
      return {
        ...state,
        isAuth: true,
        cart: action.payload,
      };
    },
    logout: state => {
      return {
        ...state,
        isAuth: false,
        cart: [],
      };
    },
  },
});

export const {
  addItem,
  changeItemQuantity,
  login,
  logout,
  removeItem,
} = userSlice.actions;

export default userSlice.reducer;
