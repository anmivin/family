import type { components } from '@api/Api';

import { RoutesProps } from '@constants/routes';

export interface UserSliceProps {
  userInfo: components['schemas']['OutputUserDto'] | null;
  pendingUserInfo: boolean;
  errorUserInfo: string;
  userAbilities: components['schemas']['UserAbilityDto'];
  mainPages: RoutesProps[];
  otherPages: RoutesProps[];
}

export const initialState: UserSliceProps = {
  userInfo: null,
  pendingUserInfo: false,
  errorUserInfo: '',
  userAbilities: { create: [], read: [], update: [], delete: [] },
  mainPages: [],
  otherPages: [],
};
