import { CartItem } from 'components/Cart/CartItem/CartItem.interface';
import userReducer, { addItem, UserState } from './userSlice';

const dummyItem: CartItem = {
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

describe('user reducer', () => {
  const initialState: UserState = {
    isAuth: false,
    cart: [],
  };
  it('should handle initial state', () => {
    expect(userReducer(undefined, { type: 'unknown' })).toEqual({
      isAuth: false,
      cart: [],
    });
  });
  it('should handle increment', () => {
    const actual = userReducer(initialState, addItem(dummyItem));
    expect(actual.cart.length).toEqual(1);
  });
});
