import { styled, Box, Typography, Button } from '@mui/material';
import { menuRoutes } from '../../shared/constants/routes';
import Draggable from 'react-draggable';

const ChangeRoutes = () => {
  return (
    <>
      <>настроить разделы </>
      <Box display="flex" flexDirection="column" gap={2}>
        {menuRoutes.map((route) => (
          <Draggable>
            <Box display="flex" gap={2}>
              {route.icon}
              <Typography>{route.name}</Typography>
            </Box>
          </Draggable>
        ))}
      </Box>
    </>
  );
};

export default ChangeRoutes;
