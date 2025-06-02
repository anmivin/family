import { useState, useEffect, useCallback, useContext } from 'react';
import { getErrorMessage } from '@shared/helpers/utils';
import { SwrContext, KeyType, DataType, ParamTypeFetched } from './SwrContext';
import { defaultSwrFetcher } from '@shared/helpers/fetcher';
import { isEqual } from 'lodash';

export type UseSwrProps<T extends KeyType> = { url: T } & ParamTypeFetched<T>;

interface ReturnType<T extends KeyType> {
  data: DataType<T> | null;
  loading: boolean;
  error: string | null;
  mutate: () => Promise<void>;
}

const RETRY_DELAY = 3000;
const MAX_RETRIES = 2;

export const useSwr = <T extends KeyType>(props: UseSwrProps<T>): ReturnType<T> => {
  const { url, ...rest } = props;
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
        const newData = await defaultSwrFetcher(props);
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
