import { Drawer, DrawerProps, styled } from '@mui/material';

interface DefaultDrawerProps extends DrawerProps {}

const StyledDrawer = styled(Drawer)`
  & .MuiDrawer-paper {
    padding: 20px;
    width: 100vw;
    background-color: ${({ theme }) => theme.color.primaryLight};
    display: flex;
    flex-derection: column;
    gap: 16px;
  }
`;
const DefaultDrawer = ({ ...props }: DefaultDrawerProps) => {
  return <StyledDrawer {...props} />;
};

export default DefaultDrawer;
