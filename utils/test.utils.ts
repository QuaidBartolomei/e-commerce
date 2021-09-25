import { CartItem } from 'features/cart/CartItem/CartItem.interface';
import { CartPageState } from 'features/cart/cartSlice';
import { UserState } from 'features/user/userSlice';
import { RootState } from 'redux/store';

export const dummyItem: CartItem = {
  id: '1',
  category: 'Hats',
  color: 'Blue',
  imageUrls: [],
  inventory: [
    {
      color: 'blue',
      size: 'large',
      stock: 1,
    },
  ],
  name: 'test',
  price: 1,
  quantity: 1,
  size: 'large',
};
export const dummyItemB: CartItem = {
  id: '2',
  category: 'Hats',
  color: 'Blue',
  imageUrls: [],
  inventory: [
    {
      color: 'blue',
      size: 'large',
      stock: 1,
    },
  ],
  name: 'test',
  price: 1,
  quantity: 1,
  size: 'large',
};

export const initialUserState: UserState = {
  isAuth: false,
  cart: [dummyItem],
};

export const initialCartPageState: CartPageState = {
  itemToRemove: '',
};

export const initialStore: RootState = {
  cartPage: initialCartPageState,
  user: initialUserState,
};
