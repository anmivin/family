import { FC, ReactNode, createContext } from 'react';

import { components, paths } from '@api/Api';

export type DataType = components['schemas'][keyof components['schemas']];
export type KeyType = keyof paths;

export interface SwrContextProps {
  data?: DataType;
  error?: string;
}

const currentState: Map<string, SwrContextProps> = new Map();
export const SwrContext = createContext<Map<string, SwrContextProps>>(currentState);

const SwrProvider: FC<{ children: ReactNode }> = ({ children }) => {
  return <SwrContext.Provider value={currentState}>{children}</SwrContext.Provider>;
};
export default SwrProvider;
