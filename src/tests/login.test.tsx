import React from 'react';
import { render, waitFor, screen } from '@testing-library/react';
import App from 'App';
import { Routes } from 'Router';
import userEvent from '@testing-library/user-event';

import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';
import '@testing-library/jest-dom';

function printPage() {
  screen.debug(undefined, 20000);
}

function testTextInput(testId: string, testValue = '') {
  const inputElement = screen.getByTestId(testId).querySelector('input');
  expect(inputElement).toBeInTheDocument();
  if (!inputElement) return;
  userEvent.type(inputElement, testValue);
  expect(inputElement.value).toBe(testValue);
}

describe('User can login with email and password', () => {
  const history = createMemoryHistory();
  render(
    <Router history={history}>
      <App />
    </Router>
  );

  test('User can navigate to signin page', async () => {
    const signInLink = screen.getByText(/Sign in/).closest('a');
    expect(signInLink).toBeInTheDocument();
    expect(signInLink).toHaveAttribute('href', Routes.SignIn);
    history.push(Routes.SignIn);

    let testValue = 'admin@test.com';
    const inputElement = (
      await screen.findByTestId('emailInput')
    ).querySelector('input');
    inputElement && userEvent.type(inputElement, testValue);
    inputElement && expect(inputElement.value).toBe(testValue);
    testTextInput('passwordInput', 'password');

    const signInButton = screen.getByText('Sign In').closest('button');
    expect(signInButton).toBeInTheDocument();
    if (!signInButton) return;
    console.log('sign in button: ', signInButton.outerHTML);

    userEvent.click(signInButton);
  });

  test('User can input email', () => {});

  //screen.debug();
});
