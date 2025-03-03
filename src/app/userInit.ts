import { FC, ReactNode, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { useUnit } from 'effector-react';

import { getUser } from 'entities/auth/Auth.api';
import { AuthService } from 'entities/auth/Auth.model';

import { useAppSelector, useAppDispatch } from '@stores/global.store';
import { setUserInfo } from '@stores/user.store';

export const UserInit: FC<{ children: ReactNode }> = ({ children }) => {
  const { userInfo } = useAppSelector((state) => state.userSlice);
  const dispatch = useAppDispatch();
  const setInfoUser = (data) => dispatch(setUserInfo(data));

  const [isInit, setInit] = useState(false);

  const router = useNavigate();

  useEffect(() => {
    if (!isInit) {
      if (userInfo?.phone) {
        setInit(true);
      } else {
        getUser()
          .then((res) => {
            if (res) {
              const clientInfo = res;
              setInfoUser(clientInfo);
              setInit(true);
            }
          })
          .catch(() => {
            router('../login');
            // showBanner({ text: 'Данные пользователя не загружены' });
            setInit(true);
          });
      }
    }
  }, [isInit]);

  return isInit ? children : null;
};
