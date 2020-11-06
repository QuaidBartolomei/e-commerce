import React from 'react';
import { render, screen } from '@testing-library/react';
import AddToCartButton from './AddToCartButton';
import { generateShopItem } from 'utils/shop-items.utils';
import { CartItem, UserProvider } from 'UserContext';

let item: CartItem = {
  ...generateShopItem(),
  quantity: 1,
};

test('renders App component', () => {
  render(
    <UserProvider>
      <AddToCartButton item={item} />
    </UserProvider>
  );

});
