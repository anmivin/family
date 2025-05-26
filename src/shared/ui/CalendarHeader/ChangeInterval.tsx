import { Box, IconButton, Typography } from '@mui/material';

import { ChevronLeftIcon, ChevronRightIcon } from '@ui/Icons';
import { ChangeIntervalProps } from './CalendarHeader.types';

const ChangeInterval = (props: ChangeIntervalProps) => {
  return (
    <Box display="flex" alignItems="center" justifyContent="center">
      <IconButton onClick={props.changePrevInterval}>
        <ChevronLeftIcon />
      </IconButton>
      <Typography>{props.currentValue}</Typography>
      <IconButton onClick={props.changeNextInterval}>
        <ChevronRightIcon />
      </IconButton>
    </Box>
  );
};

export default ChangeInterval;
