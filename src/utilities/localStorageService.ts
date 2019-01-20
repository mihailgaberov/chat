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
  if (!key) { return { error: 'Store to localStorage failed. Invalid key.' }; }
  localStorage.removeItem(key)
};

// Clear all
export const clearAll = (): void => localStorage.clear();

// Check for stored items
export const hasStoredItems = (): boolean => localStorage.length > 0;

// Check for support
export const isLocalStorageSupported = (): boolean => !!window.localStorage;