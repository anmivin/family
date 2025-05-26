import { Box, IconButton, styled, Typography } from '@mui/material';
import { useAppSelector, useAppDispatch } from '@stores/global.store';
import { setIsMenuDrawerOpen } from '@stores/modals/modals.store';

import { menuRoutes } from '@constants/routes';

import { useLocation } from 'react-router-dom';
import { BurgerIcon } from '@ui/Icons';
const StyledMenu = styled(Box)`
  background-color: ${({ theme }) => theme.color.primaryMain};
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  padding: ${({ theme }) => theme.spacing(2, 4)};
  position: fixed;
  top: 0;
`;

const Header = () => {
  const path = useLocation();
  const dispatch = useAppDispatch();
  return (
    <StyledMenu>
      <Typography variant="h6">{menuRoutes.find((item) => item.link === path.pathname)?.name}</Typography>
      <IconButton onClick={() => dispatch(setIsMenuDrawerOpen(true))}>
        <BurgerIcon />
      </IconButton>
    </StyledMenu>
  );
};

export default Header;
