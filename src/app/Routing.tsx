import { Navigate, Route, Routes } from 'react-router-dom';
import { useEffect } from 'react';
import Error from '@pages/error';
import Layout from './Layout';
import { useAppSelector, useAppDispatch } from '@shared/stores/global.store';
import Login from '@pages/login';
import Settings from '@pages/settings';

import { useLocalStorage } from '@shared/helpers/useLocalstorage';
import { defaultRouting, menuRoutes, Paths } from '@shared/constants/routes';
import { setMainPages, setOtherPages } from '@shared/stores/users/users.store';
const Routing = () => {
  const [value] = useLocalStorage<{ key: string; order: number }[]>('routes', defaultRouting);
  const { userInfo } = useAppSelector((state) => state.userSlice);

  const { mainPages } = useAppSelector((state) => state.userSlice);
  const dispatch = useAppDispatch();
  useEffect(() => {
    const allPages = value
      .sort((a, b) => (a.order > b.order ? 1 : -1))
      .map((route) => menuRoutes.find((item) => item.link === route.key))
      .filter((item) => !!item);

    dispatch(setMainPages(allPages.slice(0, 5)));
    dispatch(setOtherPages(allPages.slice(5)));
  }, [value]);

  return (
    <Routes>
      {menuRoutes.map(({ link, Component }) => (
        <Route
          key={link}
          path={link}
          element={
            userInfo ? (
              <Layout>
                <Component />
              </Layout>
            ) : (
              <Navigate to={Paths.login} replace />
            )
          }
        ></Route>
      ))}
      <Route path={Paths.login} element={userInfo ? <Navigate to={mainPages?.[0]?.link} replace /> : <Login />} />
      <Route path={Paths.loginID} element={userInfo ? <Navigate to={mainPages?.[0]?.link} replace /> : <Login />} />
      <Route
        path="/settings"
        element={
          userInfo ? (
            <Layout>
              <Settings />
            </Layout>
          ) : (
            <Navigate to={Paths.login} replace />
          )
        }
      />
      <Route path="/" element={<Navigate to={mainPages?.[0]?.link} replace />} />
      <Route path="*" element={<Error />} />
    </Routes>
  );
};

export default Routing;
