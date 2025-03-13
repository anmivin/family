import { FC, ReactNode, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { useAppSelector, useAppDispatch } from '@stores/global.store';

import { fetchUserFeatures, fetchSkills, fetchUserSkills } from '@stores/lists/lists.fetchers';
import { fetchUserInfo } from '@stores/users/users.fetchers';

export const UserInit: FC<{ children: ReactNode }> = ({ children }) => {
  const { userInfo } = useAppSelector((state) => state.userSlice);

  const dispatch = useAppDispatch();

  const [isInit, setInit] = useState(false);

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

  useEffect(() => {
    if (isInit) {
      dispatch(fetchUserFeatures());
      dispatch(fetchSkills());
      dispatch(fetchUserSkills());
    }
  }, [isInit]);

  return isInit ? children : null;
};
