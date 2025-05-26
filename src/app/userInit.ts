import { FC, ReactNode, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { useAppSelector, useAppDispatch } from '@stores/global.store';
import { setMainPages, setOtherPages } from '@stores/users/users.store';
import { fetchUserInfo } from '@stores/users/users.fetchers';
import { useLocalStorage } from '@helpers/useLocalstorage';
import { defaultRouting, menuRoutes } from '@constants/routes';
export const UserInit: FC<{ children: ReactNode }> = ({ children }) => {
  const { userInfo } = useAppSelector((state) => state.userSlice);
  const [value, setValue] = useLocalStorage<{ key: string; order: number }[]>('routes', defaultRouting);
  const [isInit, setInit] = useState(false);
  const dispatch = useAppDispatch();

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
            useNavigate()('../login');
            setInit(true);
          });
      }
    }
  }, [isInit, userInfo]);

  useEffect(() => {
    const mainPages = value
      .sort((a, b) => (a.order > b.order ? 1 : -1))
      .map((route) => menuRoutes.find((item) => item.link === route.key))
      .filter((item) => !!item);
    const otherPages = menuRoutes
      .filter((route) => !mainPages.find((item) => item?.link === route.link))
      .filter((item) => !!item);
    dispatch(setMainPages(mainPages));
    dispatch(setOtherPages(otherPages));
  }, [value]);

  return isInit ? children : null;
};
