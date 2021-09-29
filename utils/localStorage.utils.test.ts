import { getLocalStorage, persistState } from './localStorage.utils';

describe('local storage util functions', () => {
  test('should save to localStorage', () => {
    const KEY = 'foo';
    const VALUE = {
      bar: true,
    };
    const valueString = JSON.stringify(VALUE);
    persistState(KEY, VALUE);
    expect(localStorage.setItem).toHaveBeenLastCalledWith(KEY, valueString);

    expect(localStorage.__STORE__[KEY]).toBe(valueString);
    expect(Object.keys(localStorage.__STORE__).length).toBe(1);

    const response = getLocalStorage(KEY);
    expect(localStorage.getItem).toHaveBeenLastCalledWith(KEY);
    expect(response).toStrictEqual(VALUE);
  });
});
