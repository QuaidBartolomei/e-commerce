import { cleanup, render, screen } from '@testing-library/react';
import React from 'react';
import { Provider } from 'react-redux';
import { store } from 'redux/store';
import { formatItemPrice } from 'utils/shopItem.util';
import { dummyItem } from 'utils/test.utils';
import CartItem from './CartItem';

const item = dummyItem;

describe('CartItem component', () => {
  beforeEach(() => {
    render(
      <Provider store={store}>
        <CartItem item={item} />
      </Provider>
    );
  });
  afterAll(cleanup);

  test('should render item properties', () => {
    expect(screen.getByText(item.name)).toBeDefined();
    expect(screen.getByText(formatItemPrice(item))).toBeDefined();
  });
});
