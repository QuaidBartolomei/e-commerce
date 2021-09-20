import { CartItem } from 'components/Cart/CartItem/CartItem.interface';
import userReducer, {
  addItem,
  changeItemQuantity,
  login,
  logout,
  removeItem,
  selectCart,
  selectIsAuth,
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

  it('addItem', () => {
    const actual = userReducer(initialState, addItem(dummyItem));
    expect(actual.cart.length).toEqual(1);
    expect(dummyItemQuantity(actual.cart)).toEqual(2);
  });

  it('changeItemQuantity', () => {
    const actual = userReducer(
      initialState,
      changeItemQuantity({ ...dummyItem, quantity: 2 })
    );
    expect(dummyItemQuantity(actual.cart)).toEqual(2);
  });

  it('removeItem', () => {
    const actual = userReducer(initialState, removeItem(dummyItem.id));
    expect(actual.cart.length).toEqual(0);
  });

  it('login', () => {
    const actual = userReducer(initialState, login([dummyItemB]));
    expect(actual.isAuth).toBe(true);
  });

  it('logout', () => {
    const actual = userReducer({ ...initialState, isAuth: true }, logout());
    expect(actual.isAuth).toBe(false);
  });

  it('selectIsAuth', () => {
    const isAuth = selectIsAuth({ user: { ...initialState, isAuth: true } });
    expect(isAuth).toBe(true);
  });

  it('selectCart', () => {
    const cart = selectCart({ user: initialState });
    expect(cart).toStrictEqual(initialState.cart);
  });
});
