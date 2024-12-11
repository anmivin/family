import { Drawer, DrawerProps } from '@mui/material';

interface DefaultDrawerProps extends DrawerProps {}
const DefaultDrawer = ({ ...props }: DefaultDrawerProps) => {
  return <Drawer {...props} />;
};

export default DefaultDrawer;
