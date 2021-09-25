import { cleanup, render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import React from 'react';
import { Provider } from 'react-redux';
import { store } from 'redux/store';
import { dummyItem } from 'utils/test.utils';
import RemoveItemWarning from './RemoveItemWarning';

const item = dummyItem;

describe('RemoveItemWarning component', () => {
  beforeEach(() => {
    render(
      <Provider store={store}>
        <RemoveItemWarning />
      </Provider>
    );
  });
  afterEach(cleanup);

  test('should render', () => {
    expect(true);
  });
});
