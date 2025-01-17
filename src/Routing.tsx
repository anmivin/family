import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';

import Error from './pages/error';
import Layout from './Layout';

import { menuRoutes } from './shared/constants/routes';
import Login from '@pages/login';
import Settings from '@pages/settings';

const Routing = () => {
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
        <Route path="/login/:id" element={<Login />} />
        <Route
          path="/settings"
          element={
            <Layout>
              <Settings />
            </Layout>
          }
        />
        <Route path="/" element={<Navigate to={menuRoutes[0].link} replace />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Routing;
