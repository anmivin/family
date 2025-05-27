import { FC, ReactNode, createContext, useCallback, useEffect } from 'react';
import { components } from '@api/Api';
import { useAppSelector } from '@stores/global.store';

type Crud = 'create' | 'read' | 'update' | 'delete';
export interface AbilityProps<T extends Crud> {
  crud: T;
  can: components['schemas']['UserAbilityDto'][T][number];
  not?: boolean;
}

interface AbillityContextProps {
  ability: <T extends Crud>(args: AbilityProps<T>) => boolean;
}

export const AbilityContext = createContext<AbillityContextProps>({ ability: () => false });

const AbilityProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const { userAbilities } = useAppSelector((state) => state.userSlice);
  useEffect(() => console.log(userAbilities), [userAbilities]);
  const ability = useCallback(
    <T extends Crud>({ crud, can, not }: AbilityProps<T>) => {
      return not ? !userAbilities[crud].includes(can) : userAbilities[crud].includes(can);
    },
    [userAbilities]
  );

  return <AbilityContext.Provider value={{ ability }}>{children}</AbilityContext.Provider>;
};

export default AbilityProvider;
