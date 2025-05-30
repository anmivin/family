import { FC, ReactNode, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { useAppSelector, useAppDispatch } from '@shared/stores/global.store';

import { fetchUserInfo } from '@shared/stores/users/users.fetchers';

export const UserInit: FC<{ children: ReactNode }> = ({ children }) => {
  const { userInfo } = useAppSelector((state) => state.userSlice);

  const [isInit, setInit] = useState(false);
  const dispatch = useAppDispatch();
  const router = useNavigate();
  useEffect(() => {
    if (!isInit) {
      if (userInfo?.id) {
        setInit(true);
      } else {
        dispatch(fetchUserInfo())
          .unwrap()
          .then((res) => {
            if (res) {
              setInit(true);
            }
          })
          .catch(() => {
            router('../login');
            setInit(true);
          });
      }
    }
  }, [isInit, userInfo]);

  return isInit ? children : null;
};
