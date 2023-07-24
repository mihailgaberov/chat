import { debounce } from 'lodash';

export const createRecord = (key: string, value: string): { error?: string } | void => {
  if (!key || !value) { return { error: 'Store to localStorage failed. Invalid key or value.' }; }
  localStorage.setItem(key, value);
};

export const readRecord = (key: string): string | null => {
  return localStorage.getItem(key);
};

export const updateRecord = (key: string, value: string): { error?: string } | void => {
  if (!key || !value) { return { error: 'Store to localStorage failed. Invalid key or value.' }; }
  localStorage.setItem(key, value);
};

export const deleteRecord = (key: string): { error?: string } | void => {
  if (!key) { return { error: 'Delete from localStorage failed. Invalid key.' }; }
  localStorage.removeItem(key)
};

export const clearAll = (): void => localStorage.clear();

export const hasStoredItems = (): boolean => localStorage.length > 0;

export const isLocalStorageSupported = (): boolean => !!window.localStorage;

export const storeToLocalStorageDebounced = debounce((key: string, value: string): void => {
  if (isLocalStorageSupported()) {
    if (readRecord(key)) {
      updateRecord(key, value);
    } else {
      createRecord(key, value);
    }
  }
}, 1500, {leading: false});

export const storeToLocalStorage = (key: string, value: string): void => {
  if (isLocalStorageSupported()) {
    if (readRecord(key)) {
      updateRecord(key, value);
    } else {
      createRecord(key, value);
    }
  }
};
