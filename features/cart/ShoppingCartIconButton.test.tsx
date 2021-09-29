import { cleanup, render, waitFor } from '@testing-library/react';
import userReducer, { addItem } from 'features/user/userSlice';
import React from 'react';
import { Provider } from 'react-redux';
import { store } from 'redux/store';
import { dummyItem } from 'utils/test.utils';
import ShoppingCartIconButton from './ShoppingCartIconButton';
afterEach(cleanup);
describe('ShoppingCartIconButton', () => {
  test('should not indicate cart size when empty', () => {
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

  test('should indicate cart size', () => {
    const renderedComponent = render(
      <Provider store={store}>
        <ShoppingCartIconButton />
      </Provider>
    );
    userReducer(store.getState().user, addItem(dummyItem));
    waitFor(() => {
      renderedComponent.getByText('1');
    });
  });
});
