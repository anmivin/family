import { FC, ReactNode, createContext } from 'react';
import { components, paths, operations } from '@api/Api';

export type DataType = components['schemas'][keyof components['schemas']];
export interface SwrContextProps {
  data?: any;
  error?: string;
}

/* export type SchemaType = {
  [route in keyof paths]: {
    get: {
      parameters: {
        query?: object;
        path?: object;
      };
      requestBody?: {
        content: {
          [`${string}/${string}`]: unknown;
        };
      };
      responses?: {
        [code in number]: {
          content: {
            [content in MediaType]: unknown;
          };
        };
      };
    };
  };
}; */
/* export type KeyType = keyof paths;
export type ParameterType<KP extends keyof paths> = paths[KP]['parameters']['query'];
export type h<KO extends keyof operations> = operations[KO]['responses'];

type yy<KP extends keyof paths, U extends paths[KP]['get']> = U extends never ? never : U['requestBody'];
 */

/* const operation = paths['/path/to/operation'].get;

const operationType = operation.requestBody.content['application/json'].schema.type;

const responseContentType = operation.responses['200'].content['application/json'].schema.type;

const paramsType = operation.parameters.map((param) => param.schema.type); */

const currentState: Map<string, SwrContextProps> = new Map();
export const SwrContext = createContext<Map<string, SwrContextProps>>(currentState);

const SwrProvider: FC<{ children: ReactNode }> = ({ children }) => {
  return <SwrContext.Provider value={currentState}>{children}</SwrContext.Provider>;
};
export default SwrProvider;
