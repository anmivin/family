import { Box, IconButton, Button, styled } from '@mui/material';
import { ReactNode } from 'react';
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
const StyledMenu = styled(Box)`
  background-color: ${({ theme }) => theme.color.primaryMain};
  /*   position: fixed;
  top: 0; */
  display: flex;
  width: 100%;
  height: 40px;
`;

const Header = () => {
  const path = useLocation();
  return <StyledMenu></StyledMenu>;
};

export default Header;
