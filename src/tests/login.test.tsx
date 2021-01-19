import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from 'App';
import { createMemoryHistory } from 'history';
import SignInPage from 'pages/SignIn/SignIn.page';
import React from 'react';
import { Router } from 'react-router-dom';
import { Routes } from 'Router';
import { UserProvider } from 'UserContext';
import * as auth from 'utils/auth.utils';
import { initTest } from 'utils/firebase.utils';

function testTextInput(testId: string, testValue = '') {
  const inputElement = screen.getByTestId(testId).querySelector('input');
  expect(inputElement).toBeInTheDocument();
  if (!inputElement) return;
  userEvent.type(inputElement, testValue);
  expect(inputElement.value).toBe(testValue);
}

const history = createMemoryHistory();

beforeAll(async () => {
  jest.setTimeout(10000);
  await initTest();
});

test('User can navigate to signin page', async () => {
  render(
    <Router history={history}>
      <App />
    </Router>
  );
  expect(screen.getByText(Routes.Homepage)).toBeInTheDocument();
  const signInLink = screen.getByText(/Sign in/).closest('a');
  expect(signInLink).toBeInTheDocument();
  expect(signInLink).toHaveAttribute('href', Routes.SignIn);
  history.push(Routes.SignIn);
  expect(screen.getByText(Routes.SignIn)).toBeInTheDocument();
});

test('User can use sign in page', async () => {
  render(
    <UserProvider>
      <SignInPage />
    </UserProvider>
  );
  const spy = jest.spyOn(auth, 'signInWithEmail');

  testTextInput('emailInput', 'admin@test.com');
  testTextInput('passwordInput', 'password');

  const signInButton = screen.getByText('Sign In').closest('button');
  expect(signInButton).toBeInTheDocument();
  if (!signInButton) return;
  console.log('sign in button: ', signInButton.outerHTML);

  userEvent.click(signInButton);

  expect(spy).toHaveBeenCalled();
});
