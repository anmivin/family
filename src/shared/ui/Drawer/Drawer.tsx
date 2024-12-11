import { Drawer, DrawerProps, styled } from '@mui/material';

interface DefaultDrawerProps extends DrawerProps {}

const StyledDrawer = styled(Drawer)`
  & .MuiDrawer-paper {
    width: 100vw;
    background-color: ${({ theme }) => theme.color.primaryLight};
  }
`;
const DefaultDrawer = ({ ...props }: DefaultDrawerProps) => {
  return <StyledDrawer {...props} />;
};

export default DefaultDrawer;
