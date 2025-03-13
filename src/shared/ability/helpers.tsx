import { ReactNode, useContext } from 'react';
import { AbilityContext, AbilityProps } from './AbilityContext';

export const Can = <T extends 'create' | 'read' | 'update' | 'delete'>({
  children,
  crud,
  can,
  not,
}: AbilityProps<T> & { children: ReactNode }) => {
  const { ability } = useContext(AbilityContext);
  return <>{ability({ crud, can, not }) ? children : null}</>;
};

export function useCan() {
  return useContext(AbilityContext);
}
