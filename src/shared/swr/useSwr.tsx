import { useState, useEffect, useCallback, useContext } from 'react';
import { getErrorMessage } from '@helpers/utils';
import { SwrContext, KeyType, DataType, ParamType } from './SwrContext';
import { defaultSwrFetcher } from '@helpers/fetcher';

type UseSwrOptions<T extends KeyType> = { url: T } & ParamType<T>;

interface ReturnType<T extends KeyType> {
  data: DataType<T> | null;
  loading: boolean;
  error: string | null;
  mutate: () => Promise<void>;
}

const RETRY_DELAY = 3000;
const MAX_RETRIES = 3;
const isMock = import.meta.env.VITE_BACK_OR_MOCK === 'mock';
export const useSwr = <T extends KeyType>({ url, params }: UseSwrOptions<T>): ReturnType<T> => {
  const context = useContext(SwrContext);
  const [data, setData] = useState<DataType<T> | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const fetch = useCallback(async () => {
    setLoading(true);
    setError(null);

    let retries = 0;

    while (retries <= MAX_RETRIES) {
      try {
        const newData = await defaultSwrFetcher({ url, ...params });
        context.set(url, { data: newData });
        setData(newData);
        break;
      } catch (e) {
        retries++;
        if (retries > MAX_RETRIES) {
          setError(getErrorMessage(e));
        } else {
          await new Promise((res) => setTimeout(res, RETRY_DELAY));
        }
      }
    }

    setLoading(false);
  }, [url]);

  useEffect(() => {
    const currentState = context.get(url);
    if (currentState?.data) {
      setData(currentState.data as DataType<T>);
    } else {
      fetch();
    }
  }, [url, fetch]);

  const mutate = useCallback(async () => {
    await fetch();
  }, [fetch]);
  return { data, loading, error, mutate };
};

export default useSwr;
