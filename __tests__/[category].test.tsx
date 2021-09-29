import { cleanup, render } from '@testing-library/react';
import Layout from 'components/Layout';
import CategoryPage from 'pages/category/[category]';
import React from 'react';
import { Provider } from 'react-redux';
import { store } from 'redux/store';
import { dummyItem } from 'utils/test.utils';

jest.mock('next/dist/client/router', () => require('next-router-mock'));

const useComponent = () =>
  render(
    <Provider store={store}>
      <Layout>
        <CategoryPage items={[dummyItem]} />
      </Layout>
    </Provider>
  );

afterEach(cleanup);

describe('Category page', () => {
  test('show item name', () => {
    const { getByText } = useComponent();
    expect(getByText(dummyItem.name, { exact: true }));
  });
});
