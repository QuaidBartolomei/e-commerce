export const persistState = (storageKey: string, state: object): void => {
  window.localStorage.setItem(storageKey, JSON.stringify(state));
};
export const getIntialState = <T>(storageKey: string): T | undefined => {
  try {
    const savedState = window.localStorage.getItem(storageKey);
    if (!savedState) return undefined;
    return JSON.parse(savedState ?? '{}') as T;
  } catch (e) {
    return undefined;
  }
};
