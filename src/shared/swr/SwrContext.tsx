import { FC, ReactNode, createContext } from 'react';
import { paths } from '@api/Api';

export type KeyType = keyof paths;
export type ParameterType<KP extends KeyType> = paths[KP]['parameters']['query'];

export type DataType<KP extends KeyType> = KP extends keyof paths
  ? paths[KP] extends { get: infer Get }
    ? Get extends { responses: any }
      ? Get['responses'] extends { [code: number]: infer Response }
        ? Response extends {
            content?: { [type: string]: infer Value };
          }
          ? Value
          : never
        : never
      : never
    : never
  : never;

type CheckNever<T> = {
  [K in keyof T]-?: T[K][keyof T[K]] extends never ? true : false;
}[keyof T] extends true
  ? { params?: never }
  : { params: T };

export type ParamType<KP extends KeyType> = KP extends keyof paths
  ? paths[KP] extends { get: infer Get }
    ? Get extends { parameters: any }
      ? CheckNever<Get['parameters']>
      : never
    : never
  : never;

export interface SwrContextProps {
  data?: any;
}

const currentState: Map<string, SwrContextProps> = new Map();
export const SwrContext = createContext<Map<string, SwrContextProps>>(currentState);

const SwrProvider: FC<{ children: ReactNode }> = ({ children }) => {
  return <SwrContext.Provider value={currentState}>{children}</SwrContext.Provider>;
};
export default SwrProvider;
