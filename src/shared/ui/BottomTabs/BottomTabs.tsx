import { Box, Button, styled } from '@mui/material';
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';

import { useAppSelector } from '@shared/stores/global.store';
const StyledMenu = styled(Box)`
  background-color: ${({ theme }) => theme.color.primaryMain};
  position: fixed;
  bottom: 8px;
  display: flex;
  width: 100%;
`;

const StyledButton = styled(Button)<{ $selected: boolean; $count: number }>`
  && {
    width: ${({ $count }) => `calc(100vw / ${$count})`};
    border-radius: 0;
    background-color: ${({ theme, $selected }) => $selected && theme.color.accentMain};
    color: ${({ theme }) => theme.color.textMain};
  }
`;
export interface BottomTabsProps {}
const BottomTabs = ({}: BottomTabsProps) => {
  const path = useLocation();
  const { mainPages } = useAppSelector((state) => state.userSlice);
  return (
    <StyledMenu>
      {mainPages.map((route) => (
        <Link to={route.link} key={route.link}>
          <StyledButton $count={mainPages.length} $selected={path.pathname === route.link}>
            {route.icon}
          </StyledButton>
        </Link>
      ))}
    </StyledMenu>
  );
};

export default BottomTabs;
