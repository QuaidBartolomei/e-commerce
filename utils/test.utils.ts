import { CartItem } from 'components/Cart/CartItem/CartItem.interface';
import { UserState } from 'features/user/userSlice';
import { RootState } from 'redux/store';

export const dummyItem: CartItem = {
  id: '1',
  category: 'Hats',
  color: 'Blue',
  imageUrls: [],
  inventory: [],
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
  inventory: [],
  name: 'test',
  price: 1,
  quantity: 1,
  size: 'large',
};

export const initialUserState: UserState = {
  isAuth: false,
  cart: [dummyItem],
};

export const initialStore: RootState = {
  user: initialUserState,
};
