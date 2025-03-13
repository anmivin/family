import { axios, axiosInstance } from '@api/axiosInstance';
import { KeyType } from '../swr/SwrContext';
type requestType = 'delete' | 'get' | 'post' | 'put' | 'patch';

const isMock = import.meta.env.VITE_BACK_OR_MOCK === 'mock';
interface DefaultFetcherProps {
  url: KeyType;
  options: {
    type: requestType;
    params?: any;
  };
}

export const defaultFetcher = async (url: DefaultFetcherProps['url'], options: DefaultFetcherProps['options']) => {
  const urlToExecute = `${isMock ? '/faker' : ''}${url}`;

  return isMock
    ? await axios[options.type](urlToExecute, { params: options.params })
    : await axiosInstance[options.type](urlToExecute, { params: options.params });
};
