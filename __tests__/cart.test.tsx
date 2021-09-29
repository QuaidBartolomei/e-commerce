import { cleanup, render } from '@testing-library/react';
import Layout from 'components/Layout';
import CartPage from 'pages/cart';
import React from 'react';
import { Provider } from 'react-redux';
import { store } from 'redux/store';

jest.mock('next/dist/client/router', () => require('next-router-mock'));

const useComponent = () =>
  render(
    <Provider store={store}>
      <Layout>
        <CartPage />
      </Layout>
    </Provider>
  );

afterEach(cleanup);

describe('Cart page', () => {
  test('empty cart displays message', () => {
    const { getByText } = useComponent();
    expect(getByText('empty', { exact: false }));
  });

  test('empty cart displays message', () => {
    const { getByText } = useComponent();
    expect(getByText('empty', { exact: false }));
  });
});
