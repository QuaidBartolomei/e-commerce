import React from 'react';
import { render, waitFor, screen } from '@testing-library/react';
import App from 'App';
import { Routes } from 'Router';
import userEvent from '@testing-library/user-event';

import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';
import '@testing-library/jest-dom';

test('renders App component', async () => {
  const history = createMemoryHistory();
  render(
    <Router history={history}>
      <App />
    </Router>
  );
  const signInLink = screen.getByText(/Sign in/).closest('a');
  expect(signInLink).toBeInTheDocument();
  expect(signInLink).toHaveAttribute('href', Routes.SignIn);
  history.push(Routes.SignIn);
  await waitFor(() => {
    screen.debug();
  });
  //screen.debug();
});
