import { Box, IconButton, styled } from '@mui/material';
import { Link } from 'react-router-dom';
import { ReactNode, useEffect } from 'react';
import Calendar from './shared/ui/Icons/CalendarIcon';
import { Paths, getRoutes } from './shared/constants/routes';
import Test from './shared/ui/Icons/Test';
const StyledMenu = styled(Box)`
  background-color: lightBlue;
  position: fixed;
  bottom: 0;
  display: flex;
  flex-direction: row;
  width: 100vw;
  justify-content: space-around;
`;

const Layout = ({ children }: { children: ReactNode }) => {
  /*   useEffect(() => {
    const storage = localStorage.getItem('routes');
    if (storage) return;
    localStorage.setItem(
      'routes',
      JSON.stringify([
        {
          key: Paths.menu,
          order: 1,
        },
        {
          key: Paths.character,
          order: 2,
        },
        {
          key: Paths.tasks,
          order: 3,
        },
        {
          key: Paths.settings,
          order: 4,
        },
      ])
    );
  }, []); */
  return (
    <>
      {/*       <Test /> */}

      <StyledMenu>
        {getRoutes().map((route) => (
          <Link to={route.link}>
            <IconButton>{route.icon}</IconButton>
          </Link>
        ))}
      </StyledMenu>
      {children}
    </>
  );
};

export default Layout;
