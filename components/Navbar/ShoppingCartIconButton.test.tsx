import { cleanup, render } from '@testing-library/react';
import userReducer, { addItem } from 'features/user/userSlice';
import React from 'react';
import { Provider } from 'react-redux';
import { store } from 'redux/store';
import { dummyItem } from 'utils/test.utils';
import ShoppingCartIconButton from './ShoppingCartIconButton';
afterEach(cleanup);
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
