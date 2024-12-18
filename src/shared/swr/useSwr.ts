import { useContext, useEffect, useState } from 'react';
import { getErrorMessage } from '@helpers/utils';
import { /* DataType ,*/ SwrContext } from './SwrContext';

export interface useSwrProps {
  key: string;
  func: (payload?: any) => any;
  params?: any;
}
const useSwr = ({ key, func, params }: useSwrProps) => {
  const context = useContext(SwrContext);
  const [data, setData] = useState<any>();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const fetch = async () => {
    setLoading(true);
    let retries = 0;
    const maxRetries = 4;
    while (retries <= maxRetries) {
      try {
        const newData = await func(params);
        context.set(key, { data: newData });
        setData(newData);
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
