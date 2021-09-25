import { cleanup, render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { selectCart } from 'features/user/userSlice';
import React from 'react';
import { Provider } from 'react-redux';
import { useAppSelector } from 'redux/hooks';
import { store } from 'redux/store';
import { dummyItem } from 'utils/test.utils';
import AddToCartForm from './AddToCartForm';

const item = dummyItem;

describe('CartItem component', () => {
  beforeEach(() => {
    render(
      <Provider store={store}>
        <AddToCartForm item={item} />
      </Provider>
    );
  });
  afterAll(cleanup);

  test('should render submit button', () => {
    const submitButton = screen.getByText('Add To Cart');
    expect(submitButton);
  });

  test('submit button should add item to cart', async () => {
    const submitButton = screen.getByText('Add To Cart');
    expect(submitButton);
    expect(localStorage.setItem).toHaveBeenCalledTimes(0);

    userEvent.click(submitButton);

    await waitFor(() => {
      const alertText = 'Item added to cart!';
      expect(screen.getByText(alertText));
    });
  });
});
