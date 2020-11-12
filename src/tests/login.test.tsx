import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from 'App';
import { createMemoryHistory } from 'history';
import React from 'react';
import { Router } from 'react-router-dom';
import { Routes } from 'Router';
import * as auth from 'utils/auth.utils';
import { init } from 'utils/firebase.utils';

function testTextInput(testId: string, testValue = '') {
  const inputElement = screen.getByTestId(testId).querySelector('input');
  expect(inputElement).toBeInTheDocument();
  if (!inputElement) return;
  userEvent.type(inputElement, testValue);
  expect(inputElement.value).toBe(testValue);
}

describe('User can login with email and password', () => {
  const history = createMemoryHistory();
  
  beforeAll(async () => {
    jest.setTimeout(10000);
    await init();
    render(
      <Router history={history}>
        <App />
      </Router>
    );
  });

  test('User can navigate to signin page', async () => {
    const spy = jest.spyOn(auth, 'signInWithEmail');

    expect(screen.getByText('Path: /')).toBeInTheDocument();
    const signInLink = screen.getByText(/Sign in/).closest('a');
    expect(signInLink).toBeInTheDocument();
    expect(signInLink).toHaveAttribute('href', Routes.SignIn);

    history.push(Routes.SignIn);
    expect(screen.getByText('Path: /signin')).toBeInTheDocument();

    const inputElement = (
      await screen.findByTestId('emailInput')
    ).querySelector('input');
    expect(inputElement).toBeInTheDocument();
    let testValue = 'admin@test.com';
    inputElement && userEvent.type(inputElement, testValue);
    inputElement && expect(inputElement.value).toBe(testValue);
    testTextInput('passwordInput', 'password');

    const signInButton = screen.getByText('Sign In').closest('button');
    expect(signInButton).toBeInTheDocument();
    if (!signInButton) return;
    console.log('sign in button: ', signInButton.outerHTML);

    userEvent.click(signInButton);

    expect(spy).toHaveBeenCalled();
  });
});
