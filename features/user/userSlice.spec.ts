import { CartItem } from 'components/Cart/CartItem/CartItem.interface';
import userReducer, {
  addItem,
  changeItemQuantity,
  removeItem,
  UserState,
} from './userSlice';

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
const dummyItemB: CartItem = {
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

const dummyItemQuantity = (cart: CartItem[]) =>
  cart.find(x => x.id === dummyItem.id)?.quantity;

describe('user reducer', () => {
  const initialState: UserState = {
    isAuth: false,
    cart: [dummyItem],
  };
  it('should handle initial state', () => {
    expect(userReducer(undefined, { type: 'unknown' })).toEqual({
      isAuth: false,
      cart: [],
    });
  });

  it('should handle addItem', () => {
    const actual = userReducer(initialState, addItem(dummyItem));
    expect(actual.cart.length).toEqual(1);
    expect(dummyItemQuantity(actual.cart)).toEqual(2);
  });

  it('should handle changeItemQuantity', () => {
    const actual = userReducer(
      initialState,
      changeItemQuantity({ ...dummyItem, quantity: 2 })
    );
    expect(dummyItemQuantity(actual.cart)).toEqual(2);
  });

  it('should handle removeItem', () => {
    const actual = userReducer(initialState, removeItem(dummyItem.id));
    expect(actual.cart.length).toEqual(0);
  });
});
