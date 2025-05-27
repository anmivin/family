import DefaultDrawer from '@ui/Drawer';
import { useAppSelector, useAppDispatch } from '@shared/stores/global.store';
import { setIsMenuDrawerOpen } from '@shared/stores/modals/modals.store';
import { Link } from 'react-router-dom';
import { Box, Typography } from '@mui/material';
const MenuDrawer = () => {
  const dispatch = useAppDispatch();
  const onClose = () => dispatch(setIsMenuDrawerOpen(false));
  const { isMenuDrawerOpen } = useAppSelector((state) => state.modalsSlice);
  const { otherPages } = useAppSelector((state) => state.userSlice);

  return (
    <DefaultDrawer anchor="right" open={isMenuDrawerOpen} onClose={onClose} width="260px">
      {otherPages.map((route) => (
        <Link to={route.link} key={route.link} onClick={onClose} style={{ textDecoration: 'none' }}>
          <Box display="flex" gap={2} alignItems="center">
            {route.icon}
            <Typography> {route.name}</Typography>
          </Box>
        </Link>
      ))}
    </DefaultDrawer>
  );
};

export default MenuDrawer;
