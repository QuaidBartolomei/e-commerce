import { cleanup, render } from '@testing-library/react';
import { CartItem } from 'components/Cart/CartItem/CartItem.interface';
import userReducer, { addItem } from 'features/user/userSlice';
import React from 'react';
import { Provider } from 'react-redux';
import { store } from 'redux/store';
import ShoppingCartIconButton from './ShoppingCartIconButton';

afterEach(cleanup);

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

describe('ShoppingCartIconButton', () => {
  test('should indicate cart size', () => {
    const renderedComponent = render(
      <Provider store={store}>
        <ShoppingCartIconButton />
      </Provider>
    );
    const cartSize = store.getState().user.cart.length.toString();
    userReducer(store.getState().user, addItem(dummyItem));
    if (cartSize !== '0')
      expect(renderedComponent.getByText(cartSize)).toBe(true);
  });
});
