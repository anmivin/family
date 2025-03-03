import { Navigate, Route, Routes } from 'react-router-dom';

import Error from '@pages/error';
import Layout from './Layout';

import { menuRoutes, getRoutes, Paths } from '@constants/routes';
import Login from '@pages/login';
import Settings from '@pages/settings';
import { useAppSelector } from '@stores/global.store';

const Routing = () => {
  const { userInfo } = useAppSelector((state) => state.userSlice);
  const currentRoutes = getRoutes();
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
      <Route path={Paths.login} element={userInfo ? <Navigate to={currentRoutes[0].link} replace /> : <Login />} />
      <Route path={Paths.loginID} element={userInfo ? <Navigate to={currentRoutes[0].link} replace /> : <Login />} />
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
      <Route path="/" element={<Navigate to={currentRoutes[0].link} replace />} />
      <Route path="*" element={<Error />} />
    </Routes>
  );
};

export default Routing;
