import { useEffect, useState } from 'react';

const usePersistedSearch = (initialState, sessionStorageKey) => {
  const [state, setState] = useState(() => {
    const persistedValue = sessionStorage.getItem(sessionStorageKey);
    return persistedValue ? JSON.parse(persistedValue) : initialState;
  });

  useEffect(() => {
    sessionStorage.setItem(sessionStorageKey, JSON.stringify(state));
  }, [state, sessionStorageKey]);
  return [state, setState];
};
//why call inside the function
export const useSearchStr = () => {
  return usePersistedSearch('', 'SearchString');
};
