import { getLocalStorage } from 'utils/localStorage.utils';
import { getStore } from './store';

describe('store is created correctly', () => {
  test('store should load from local storage', () => {
    const KEY = 'store';

    const VALUE = {
      user: {
        isAuth: false,
        cart: [],
      },
    };

    getLocalStorage('test');
    expect(localStorage.getItem).toHaveBeenLastCalledWith('test');
    getStore();
    expect(localStorage.getItem).toHaveBeenLastCalledWith(KEY);
  });
});
