import type { components } from '@api/Api';

import { RoutesProps } from '@constants/routes';

export interface UserSliceProps {
  userInfo: components['schemas']['OutputUserDto'] | null;
  pendingUserInfo: boolean;
  errorUserInfo: string | null;
  userAbilities: components['schemas']['UserAbilityDto'];
  pendingAbilities: boolean;
  errorAbilities: string | null;
  mainPages: RoutesProps[];
  otherPages: RoutesProps[];
}

export const initialState: UserSliceProps = {
  userInfo: null,
  pendingUserInfo: false,
  errorUserInfo: null,
  userAbilities: { create: [], read: [], update: [], delete: [] },
  pendingAbilities: false,
  errorAbilities: null,
  mainPages: [],
  otherPages: [],
};
