import { useContext, useEffect, useState } from 'react';

import { DataType, SwrContext } from './SwrContext';

export interface useSwrProps {
  key: string;
  func: (payload?: DataType) => DataType;
  params?: DataType;
}
export const useSwr = ({ key, func, params }: useSwrProps) => {
  const context = useContext(SwrContext);
  const [data, setData] = useState<DataType>();
  const [loading, setLoading] = useState(false);

  const fetch = async () => {
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
          context.set(key, { error: 'error' });
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
      setLoading(true);
      fetch();
    }
  }, []);

  return { data, loading, error: context.get(key)?.error, mutate: fetch };
};
