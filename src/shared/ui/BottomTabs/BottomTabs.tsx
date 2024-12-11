import { Box, IconButton, Button, styled } from '@mui/material';
import { ReactNode } from 'react';
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
const StyledMenu = styled(Box)`
  background-color: ${({ theme }) => theme.color.secondaryMain};
  position: fixed;
  bottom: 0;
  display: flex;
  width: 100%;
`;

const StyledButton = styled(Button)<{ $selected: boolean; $count: number }>`
  && {
    width: ${({ $count }) => `calc(100vw / ${$count})`};
    border-radius: 0;
    background-color: ${({ theme, $selected }) => $selected && theme.color.accentMain};
  }
`;
export interface BottomTabsProps {
  routes: { link: string; icon: ReactNode }[];
}
const BottomTabs = ({ routes }: BottomTabsProps) => {
  const path = useLocation();

  return (
    <StyledMenu>
      {routes.map((route) => (
        <Link to={route.link}>
          <StyledButton $count={routes.length} $selected={path.pathname === route.link}>
            {route.icon}
          </StyledButton>
        </Link>
      ))}
    </StyledMenu>
  );
};

export default BottomTabs;
