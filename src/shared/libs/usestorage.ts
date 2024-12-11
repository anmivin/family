import { useEffect, useState } from 'react';

import { Preferences } from '@capacitor/preferences';

// Хук для управления состоянием темы , сохраняемым в хранилищах (localStorage и Capacitor Preferences)
const useStorage = <T>(key: string, defaultValue: T) => {
  const [storedValue, setStoredValue] = useState<T>(defaultValue);

  useEffect(() => {
    const loadStoredValue = async () => {
      let storedData: T | null = null;

      // Сначала пытаемся загрузить значение из localStorage
      const localStorageValue = localStorage.getItem(key);
      if (localStorageValue) {
        storedData = JSON.parse(localStorageValue);
      }

      // Если значение не найдено в localStorage, тогда пытаемся загрузить из Capacitor Preferences
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

      // Устанавливаем загруженное значение или используем значение по умолчанию
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
