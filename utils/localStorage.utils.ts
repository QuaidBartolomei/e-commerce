export const persistState = (storageKey: string, state: object): void => {
  localStorage.setItem(storageKey, JSON.stringify(state));
};

export const getLocalStorage = <T>(storageKey: string): T | undefined => {
  try {
    const savedState = localStorage.getItem(storageKey);
    if (!savedState) return undefined;
    return JSON.parse(savedState ?? '{}') as T;
  } catch (e) {
    return undefined;
  }
};
