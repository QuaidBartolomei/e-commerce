import {
  cleanup,
  render,
  screen,
  fireEvent,
  waitFor,
} from '@testing-library/react';
import React from 'react';
import { Provider } from 'react-redux';
import { store } from 'redux/store';
import { dummyItem } from 'utils/test.utils';
import AddToCartForm from './AddToCartForm';
import userEvent from '@testing-library/user-event';

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

    await waitFor(() => {
      userEvent.click(submitButton);
    });
  });
});
