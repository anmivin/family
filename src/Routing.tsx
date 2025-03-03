import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';

import Error from './pages/error';
import Layout from './Layout';

import { menuRoutes, getRoutes, Paths } from './shared/constants/routes';
import Login from '@pages/login';
import Settings from '@pages/settings';
import { useAppSelector, useAppDispatch } from '@stores/global.store';
import { setUserInfo } from '@stores/user.store';

const Routing = () => {
  const { userInfo } = useAppSelector((state) => state.userSlice);
  return (
    <BrowserRouter>
      <Routes>
        {menuRoutes.map(({ link, Component }) => (
          <Route
            key={link}
            path={link}
            element={
              <Layout>
                <Component />
              </Layout>
            }
          ></Route>
        ))}
        <Route path={Paths.login} element={<Login />} />
        <Route path={Paths.loginID} element={<Login />} />
        <Route
          path="/settings"
          element={
            <Layout>
              <Settings />
            </Layout>
          }
        />
        <Route path="/" element={<Navigate to={getRoutes()[0].link} replace />} />
        <Route path="*" element={<Error />} />

        {/*  <Route path={Paths.register} element={userInfo ? <Navigate to={Paths.main} replace /> : <Register />} />
            <Route path={Paths.auth} element={userInfo ? <Navigate to={Paths.main} replace /> : <Auth />} />
            <Route path={Paths.presentation} element={getPresentationElement()} />
            <Route path="*" element={<Navigate to={Paths.auth} replace />} /> */}
      </Routes>
    </BrowserRouter>
  );
};

export default Routing;
