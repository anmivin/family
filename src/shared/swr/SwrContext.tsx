import { FC, ReactNode, createContext } from 'react';
import { paths } from '@api/Api';

export type KeyType = keyof paths;
export type ParameterType<KP extends KeyType> = paths[KP]['parameters']['query'];

export type DataType<KP> = KP extends KeyType
  ? paths[KP]['get']['responses'] extends infer Responses
    ? Responses extends {
        [code: number]: infer CodeObject extends {
          content?: {
            [type: string]: unknown;
          };
          headers: {
            [name: string]: unknown;
          };
        };
      }
      ? CodeObject['content'] extends infer Content
        ? Content extends { [key: string]: infer Value }
          ? Value
          : never
        : never
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
