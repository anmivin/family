import { useState, useEffect, useCallback, useContext } from 'react';
import { getErrorMessage } from '@helpers/utils';
import { SwrContext, KeyType, KinoKeyType, DataType, ParamTypeFetched } from './SwrContext';
import { defaultSwrFetcher } from '@helpers/fetcher';
import { isEqual } from 'lodash';

type FetchType<T extends KeyType | KinoKeyType> = { kinoFetch: T extends KinoKeyType ? true : false };
export type UseSwrProps<T extends KeyType | KinoKeyType> = { url: T } & ParamTypeFetched<T> & FetchType<T>;

interface ReturnType<T extends KeyType | KinoKeyType> {
  data: DataType<T> | null;
  loading: boolean;
  error: string | null;
  mutate: () => Promise<void>;
}

const RETRY_DELAY = 3000;
const MAX_RETRIES = 2;

export const useSwr = <T extends KeyType | KinoKeyType>(props: UseSwrProps<T>): ReturnType<T> => {
  const { url, kinoFetch, ...rest } = props;
  const context = useContext(SwrContext);
  const [data, setData] = useState<DataType<T> | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const fetch = useCallback(async () => {
    setLoading(true);
    setError(null);

    let retries = 0;
    context.set(url, { prevParams: rest });
    while (retries <= MAX_RETRIES) {
      try {
        if (kinoFetch) {
        } else {
          const newData = await defaultSwrFetcher(props);
        }

        context.set(url, { data: newData, prevParams: rest });
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
  }, [url, rest]);

  useEffect(() => {
    const currentState = context.get(url);

    if ((!!error && isEqual(currentState?.prevParams, rest)) || loading) return;
    if (currentState?.data && isEqual(currentState.prevParams, rest)) {
      setData(currentState.data as DataType<T>);
    } else {
      fetch();
    }
  }, [url, rest, loading]);

  const mutate = useCallback(async () => {
    await fetch();
  }, [fetch]);

  return { data, loading, error, mutate };
};

export default useSwr;
