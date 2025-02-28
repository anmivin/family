import { useEffect, useState } from 'react';

import { Preferences } from '@capacitor/preferences';

const useStorage = <T>(key: string, defaultValue: T) => {
  const [storedValue, setStoredValue] = useState<T>(defaultValue);

  useEffect(() => {
    const loadStoredValue = async () => {
      let storedData: T | null = null;
      const localStorageValue = localStorage.getItem(key);
      if (localStorageValue) {
        storedData = JSON.parse(localStorageValue);
      }

      if (!storedData) {
        try {
          const { value } = await Preferences.get({ key });
          if (value) {
            storedData = JSON.parse(value);
          }
        } catch (error) {
          console.error('Ошибка при загрузке из Capacitor Preferences:', error);
        }
      }

      if (storedData !== null && storedData !== undefined) {
        setStoredValue(storedData);
      } else {
        setStoredValue(defaultValue);
      }
    };

    loadStoredValue();
  }, [key, defaultValue]);

  const setValue = async (value: T) => {
    setStoredValue(value);
    try {
      await Preferences.set({ key, value: JSON.stringify(value) });
      localStorage.setItem(key, JSON.stringify(value));
    } catch (error) {
      console.error('Ошибка при установке значения:', error);
    }
  };

  return { storedValue, setValue };
};

export default useStorage;
