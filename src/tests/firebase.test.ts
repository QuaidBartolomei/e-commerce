import '@testing-library/jest-dom';
import firebase, { init } from 'utils/firebase.utils';

describe('User can login with email and password', () => {
  beforeAll(async () => {
    jest.setTimeout(10000);
    await init();
  });

  beforeEach(async () => await firebase.auth().signOut());

  test('sign in with email and wrong password', async () => {
    let error = '';
    try {
      await firebase
        .auth()
        .signInWithEmailAndPassword('admin@test.com', 'wrongPassword');
    } catch (err) {
      error = err.toString();
    }
    expect(error).toBe(
      'Error: The password is invalid or the user does not have a password.'
    );
  });
  test('sign in with email and password', async () => {
    const user = await firebase
      .auth()
      .signInWithEmailAndPassword('admin@test.com', 'password');
    expect(user).toBeTruthy();
  });
});
