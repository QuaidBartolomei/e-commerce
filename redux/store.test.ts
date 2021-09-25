import { getLocalStorage } from 'utils/localStorage.utils';
import { dummyItem, initialStore } from 'utils/test.utils';

const KEY = 'store';

describe('store is created correctly', () => {
  test('store should load from local storage', () => {
    getLocalStorage('test');
    expect(localStorage.getItem).toHaveBeenLastCalledWith('test');
    require('redux/store');
    expect(localStorage.getItem).toHaveBeenLastCalledWith(KEY);
  });

  test('store should persist state with each change', () => {
    const { store } = require('redux/store');
    const testData = JSON.stringify(initialStore);
    localStorage.setItem('test', testData);
    expect(localStorage.setItem).toHaveBeenLastCalledWith('test', testData);

    store.dispatch({ type: 'user/login', payload: [] });
    const newData = { ...store.getState(), user: { isAuth: true, cart: [] } };
    expect(localStorage.setItem).toHaveBeenLastCalledWith(
      KEY,
      JSON.stringify(newData)
    );

    store.dispatch({ type: 'user/addItem', payload: dummyItem });
    const addItemRes = {
      ...store.getState(),
      user: { isAuth: true, cart: [dummyItem] },
    };
    expect(localStorage.setItem).toHaveBeenLastCalledWith(
      KEY,
      JSON.stringify(addItemRes)
    );
  });
});
