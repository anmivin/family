import { Box, IconButton, Button, styled } from '@mui/material';
import { ReactNode } from 'react';
import { Link } from 'react-router-dom';
import { Paths } from '@constants/routes';

import { useLocation } from 'react-router-dom';
import { SettingsIcon } from '@ui/Icons';
const StyledMenu = styled(Box)`
  background-color: ${({ theme }) => theme.color.primaryMain};
  position: fixed;
  top: 0;
  display: flex;
  width: 100%;
  height: 40px;
`;

const Header = () => {
  return (
    <StyledMenu>
      <Box>
        <Link to={Paths.settings}>
          <IconButton>
            <SettingsIcon />
          </IconButton>
        </Link>
      </Box>
    </StyledMenu>
  );
};

export default Header;
