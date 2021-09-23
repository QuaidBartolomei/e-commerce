import { CartItem } from 'components/Cart/CartItem/CartItem.interface';
import { dummyItem, dummyItemB, initialUserState } from 'utils/test.utils';
import userReducer, {
  addItem,
  changeItemQuantity,
  login,
  logout,
  removeItem,
  selectCart,
  selectIsAuth,
} from './userSlice';

const dummyItemQuantity = (cart: CartItem[]) =>
  cart.find(x => x.id === dummyItem.id)?.quantity;

describe('user reducer', () => {
  it('should handle initial state', () => {
    expect(userReducer(undefined, { type: 'unknown' })).toEqual({
      isAuth: false,
      cart: [],
    });
  });

  it('addItem', () => {
    const actual = userReducer(initialUserState, addItem(dummyItem));
    expect(actual.cart.length).toEqual(1);
    expect(dummyItemQuantity(actual.cart)).toEqual(2);
  });

  it('changeItemQuantity', () => {
    const actual = userReducer(
      initialUserState,
      changeItemQuantity({ ...dummyItem, quantity: 2 })
    );
    expect(dummyItemQuantity(actual.cart)).toEqual(2);
  });

  it('removeItem', () => {
    const actual = userReducer(initialUserState, removeItem(dummyItem.id));
    expect(actual.cart.length).toEqual(0);
  });

  it('login', () => {
    const actual = userReducer(initialUserState, login([dummyItemB]));
    expect(actual.isAuth).toBe(true);
  });

  it('logout', () => {
    const actual = userReducer({ ...initialUserState, isAuth: true }, logout());
    expect(actual.isAuth).toBe(false);
  });

  it('selectIsAuth', () => {
    const isAuth = selectIsAuth({
      user: { ...initialUserState, isAuth: true },
    });
    expect(isAuth).toBe(true);
  });

  it('selectCart', () => {
    const cart = selectCart({ user: initialUserState });
    expect(cart).toStrictEqual(initialUserState.cart);
  });
});
