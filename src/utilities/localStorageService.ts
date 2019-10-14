import { debounce } from 'lodash';

// Create a record
export const createRecord = (key: string, value: string): { error?: string } | void => {
  if (!key || !value) { return { error: 'Store to localStorage failed. Invalid key or value.' }; }
  localStorage.setItem(key, value);
};

// Read a record
export const readRecord = (key: string): string | null => {
  return localStorage.getItem(key);
};

// Update a record
export const updateRecord = (key: string, value: string): { error?: string } | void => {
  if (!key || !value) { return { error: 'Store to localStorage failed. Invalid key or value.' }; }
  localStorage.setItem(key, value);
};

// Delete a record
export const deleteRecord = (key: string): { error?: string } | void => {
  if (!key) { return { error: 'Delete from localStorage failed. Invalid key.' }; }
  localStorage.removeItem(key)
};

// Clear all
export const clearAll = (): void => localStorage.clear();

// Check for stored items
export const hasStoredItems = (): boolean => localStorage.length > 0;

// Check for support
export const isLocalStorageSupported = (): boolean => !!window.localStorage;

// Store (create or update) record to local storage with some delay (e.g. 1500 ms)
export const storeToLocalStorageDebounced = debounce((key: string, value: string): void => {
  if (isLocalStorageSupported()) {
    if (readRecord(key)) {
      updateRecord(key, value);
    } else {
      createRecord(key, value);
    }
  }
}, 1500, {leading: false});

// Store (create or update) record to local storage
export const storeToLocalStorage = (key: string, value: string): void => {
  if (isLocalStorageSupported()) {
    if (readRecord(key)) {
      updateRecord(key, value);
    } else {
      createRecord(key, value);
    }
  }
};
