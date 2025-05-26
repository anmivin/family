import { useEffect, useState } from 'react';

import { Preferences } from '@capacitor/preferences';

export const useLocalStorage = <T>(key: string, defaultValue: T): [T, (props: T) => void] => {
  const [value, setStoreValue] = useState<T>(defaultValue);

  useEffect(() => {
    const getValue = async () => {
      let data: T | null = null;
      const lsData = localStorage.getItem(key);
      if (lsData) data = JSON.parse(lsData);

      if (!data) {
        try {
          const { value: prefValue } = await Preferences.get({ key });
          if (prefValue) data = JSON.parse(prefValue);
        } catch (e) {}
      }

      data !== null;
      setStoreValue(data !== null ? data : defaultValue);
    };

    getValue();
  }, [key, defaultValue]);

  const setValue = async (value: T) => {
    setStoreValue(value);
    try {
      await Preferences.set({ key, value: JSON.stringify(value) });
      localStorage.setItem(key, JSON.stringify(value));
    } catch (e) {}
  };

  return [value, setValue];
};
