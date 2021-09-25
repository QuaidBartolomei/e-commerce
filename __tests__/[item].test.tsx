import { cleanup, render, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Layout from 'components/Layout';
import { UserState } from 'features/user/userSlice';
import ItemPage from 'pages/item/[item]';
import React from 'react';
import { Provider } from 'react-redux';
import { store } from 'redux/store';
import { getLocalStorage } from 'utils/localStorage.utils';
import { dummyItem } from 'utils/test.utils';

jest.mock('next/dist/client/router', () => require('next-router-mock'));

const useComponent = () =>
  render(
    <Provider store={store}>
      <Layout>
        <ItemPage item={dummyItem} />
      </Layout>
    </Provider>
  );

describe('Item page', () => {
  afterEach(cleanup);

  it('renders index page', () => {
    useComponent();
    expect(true);
  });

  test('should render Add To Cart button', () => {
    const { getByText } = useComponent();
    const submitButton = getByText('Add To Cart');
    expect(submitButton);
    expect(getLocalStorage<UserState>('store')?.cart.length).toBe(undefined);
    userEvent.click(submitButton);
    waitFor(() => {
      expect(getByText('Item Added To Cart!'));
      expect(getLocalStorage<UserState>('store')?.cart.length).toBe(1);
    });
  });
});
