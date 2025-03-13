import { Box, IconButton, styled, Typography } from '@mui/material';

import { Link } from 'react-router-dom';
import { Paths, menuRoutes } from '@constants/routes';

import { useLocation } from 'react-router-dom';
import { SettingsIcon } from '@ui/Icons';
const StyledMenu = styled(Box)`
  background-color: ${({ theme }) => theme.color.primaryMain};
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  padding: ${({ theme }) => theme.spacing(2, 4)};
`;

const Header = () => {
  const path = useLocation();

  return (
    <StyledMenu>
      <Typography variant="h6">{menuRoutes.find((item) => item.link === path.pathname)?.name}</Typography>
      <Link to={Paths.settings}>
        <IconButton>
          <SettingsIcon />
        </IconButton>
      </Link>
    </StyledMenu>
  );
};

export default Header;
