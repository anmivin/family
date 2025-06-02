import { FC, ReactNode, createContext } from 'react';
import { paths } from '@shared/api/Api';

type GetKeys<T> = {
  [K in keyof T]: T[K] extends { get?: never } ? never : K;
}[keyof T];

export type KeyType = GetKeys<paths>;

export type GetDataType<T, K extends keyof T> = T[K] extends { get: infer Get }
  ? Get extends { responses: any }
    ? Get['responses'] extends { [code: number]: infer Response }
      ? Response extends {
          content?: { [type: string]: infer Value };
        }
        ? Value
        : never
      : never
    : never
  : never;

export type DataType<KP extends KeyType> = KP extends keyof paths ? GetDataType<paths, KP> : never;

export type TransformParams<T> = {
  [K in keyof T as K extends 'query' ? K : K extends 'path' ? 'params' : never]-?: T[K];
};

export type CheckNever<T> = {
  [K in keyof T as K extends 'query'
    ? T[K] extends undefined
      ? never
      : K
    : K extends 'path'
    ? T[K] extends undefined
      ? never
      : 'params'
    : never]-?: T[K];
};
export type GetParamsType<T, K extends keyof T> = T[K] extends { get: infer Get }
  ? Get extends { parameters: any }
    ? TransformParams<Get['parameters']>
    : never
  : never;

type s = ParamTypeFetched<'/tasks/{id}'>;
export type GetParamsTypeFetcher<T, K extends keyof T> = T[K] extends { get: infer Get }
  ? Get extends { parameters: any }
    ? CheckNever<Get['parameters']>
    : never
  : never;

export type ParamType<KP extends KeyType> = KP extends keyof paths ? GetParamsType<paths, KP> : never;

export type ParamTypeFetched<KP extends KeyType> = KP extends keyof paths ? GetParamsTypeFetcher<paths, KP> : never;

export interface SwrContextProps {
  data?: any;
  prevParams?: any;
}

const currentState: Map<string, SwrContextProps> = new Map();
export const SwrContext = createContext<Map<string, SwrContextProps>>(currentState);

const SwrProvider: FC<{ children: ReactNode }> = ({ children }) => {
  return <SwrContext.Provider value={currentState}>{children}</SwrContext.Provider>;
};
export default SwrProvider;
