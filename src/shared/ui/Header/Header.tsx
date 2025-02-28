import { Box, IconButton, Button, styled, Typography } from '@mui/material';
import { ReactNode } from 'react';
import { Link } from 'react-router-dom';
import { Paths, menuRoutes } from '@constants/routes';

import { useLocation } from 'react-router-dom';
import { SettingsIcon } from '@ui/Icons';
const StyledMenu = styled(Box)`
  background-color: ${({ theme }) => theme.color.primaryMain};
  position: fixed;
  top: 0;
  display: flex;
  width: 100%;
  height: 40px;
  justify-content: space-between;
  align-items: center;
`;

const Header = () => {
  const path = useLocation();

  return (
    <StyledMenu>
      <Typography>{menuRoutes.find((item) => item.link === path.pathname)?.name}</Typography>
      <Link to={Paths.settings}>
        <IconButton>
          <SettingsIcon />
        </IconButton>
      </Link>
    </StyledMenu>
  );
};

export default Header;
