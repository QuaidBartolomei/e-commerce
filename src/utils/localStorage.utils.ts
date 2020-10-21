export const persistState = (storageKey: string, state: object): void => {
  window.localStorage.setItem(storageKey, JSON.stringify(state));
};
export const getIntialState = <T>(storageKey: string): T | undefined => {
  const savedState = window.localStorage.getItem(storageKey);
  try {
    if (!savedState) {
      return undefined;
    }
    return JSON.parse(savedState ?? '{}') as T;
  } catch (e) {
    console.error('Error loading state : ' + storageKey);
    return undefined;
  }
};
