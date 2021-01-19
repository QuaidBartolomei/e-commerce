import '@testing-library/jest-dom';
import { render, screen, waitFor } from '@testing-library/react';
import App from 'App';
import { createMemoryHistory } from 'history';
import React from 'react';
import { Router } from 'react-router-dom';
import { Routes } from 'Router';
import { initTest } from 'utils/firebase.utils';

// testing item details page
// clicking thumbnails changes main image
// add to cart button
// shows alert
// changes cart icon
// changes user cart data

const history = createMemoryHistory();

beforeAll(async () => {
  jest.setTimeout(10000);
  await initTest();
});

test('Item details page redirects to Homepage if no prop or param', async () => {
  render(
    <Router history={history}>
      <App />
    </Router>
  );
  history.push(Routes.ItemDetails);
  expect(screen.getByText(Routes.ItemDetails)).toBeInTheDocument();
  waitFor(() => {
    expect(screen.getByText(Routes.Homepage)).toBeInTheDocument();
  });
});
