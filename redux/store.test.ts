import { getLocalStorage } from 'utils/localStorage.utils';

describe('store is created correctly', () => {
  test('store should load from local storage', () => {
    const KEY = 'store';
    getLocalStorage('test');
    expect(localStorage.getItem).toHaveBeenLastCalledWith('test');
    require('redux/store');
    expect(localStorage.getItem).toHaveBeenLastCalledWith(KEY);
  });
});
