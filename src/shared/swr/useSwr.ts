import { useContext, useEffect, useState } from 'react';
import { getErrorMessage } from '@helpers/utils';
import { DataType, KeyType, SwrContext } from './SwrContext';

export interface useSwrProps {
  func: (url?: any) => Promise<any>;
}

interface ReturnType<T extends KeyType> {
  data: DataType<T> | null;
  loading: boolean;
  error: string | null;
  mutate: () => Promise<void>;
}

const getKey = (fetchFunction: useSwrProps['func']): string | undefined => {
  try {
    const funcBody = fetchFunction.toString();
    const match = funcBody.match(/axios\.get\(['"]([^'"]+)['"]/);
    return match && match[1] ? match[1] : undefined;
  } catch (error) {
    console.error(error);
  }
  return undefined;
};

const useSwr = <T extends KeyType>({ func }: useSwrProps): ReturnType<T> => {
  const key = getKey(func);
  if (!key) throw new Error('no url');
  const context = useContext(SwrContext);
  const [data, setData] = useState<DataType<typeof key> | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const sdfs = '/tasks';
  type sf = DataType<typeof sdfs>;
  const fetch = async () => {
    setLoading(true);
    let retries = 0;
    const maxRetries = 4;
    while (retries <= maxRetries) {
      try {
        const newData = await func();
        context.set(key, { data: newData.data });
        setData(newData.data);
        break;
      } catch (e) {
        retries++;
        if (retries === maxRetries) {
          setError(getErrorMessage(e));
        } else {
          await new Promise((resolve) => setTimeout(resolve, 1000));
        }
      }
    }
    setLoading(false);
  };

  useEffect(() => {
    const currentState = context.get(key);

    if (currentState) {
      setData(currentState.data);
    } else {
      fetch();
    }
  }, []);

  return { data, loading, error, mutate: fetch };
};

export default useSwr;
