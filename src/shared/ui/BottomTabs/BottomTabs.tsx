import { Box, IconButton, Paper, styled } from '@mui/material';
import { ReactNode } from 'react';
import { Link } from 'react-router-dom';
const StyledMenu = styled(Paper)`
  background-color: lightBlue;
  position: fixed;
  bottom: 0;
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: space-around;
`;

export interface BottomTabsProps {
  routes: { link: string; icon: ReactNode }[];
}
const BottomTabs = ({ routes }: BottomTabsProps) => {
  return (
    <StyledMenu>
      {routes.map((route) => (
        <Link to={route.link}>
          <IconButton sx={{ height: '80px' }}>{route.icon}</IconButton>
        </Link>
      ))}
    </StyledMenu>
  );
};

export default BottomTabs;
