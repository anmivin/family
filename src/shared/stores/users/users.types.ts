import type { components } from '@api/Api';
import { defaultRouting, menuRoutes } from '@constants/routes';
import { RoutesProps } from 'react-router-dom';
export interface UserSliceProps {
  userInfo: components['schemas']['OutputUserDto'] | null;
  pendingUserInfo: boolean;
  errorUserInfo: string;
  userAbilities: components['schemas']['UserAbilityDto'];
  mainPages: RoutesProps[];
  otherPages: RoutesProps[];
}

export const initialState: UserSliceProps = {
  userInfo: null /* {
    id: 'ff',
    name: 'df',
    xp: 200,
    gold: 10,
    familyId: '',
  } */,
  pendingUserInfo: false,
  errorUserInfo: '',
  userAbilities: { create: [], read: [], update: [], delete: [] },
  mainPages: [],
  otherPages: [],
};
