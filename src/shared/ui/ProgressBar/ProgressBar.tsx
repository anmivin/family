import { StyledLinearProgress } from './ProgressBar.styled';
import { Box, Typography } from '@mui/material';
import { ProgressBarProps } from './ProgressBar.types';
const ProgressBar = ({ value, title, subtitle, color }: ProgressBarProps) => {
  return (
    <Box display="flex" flexDirection="column" gap={2}>
      <Typography variant="body1">{title}</Typography>
      <StyledLinearProgress variant="determinate" value={value} barcolor={color} />
      <Typography variant="caption" alignSelf="end">
        {subtitle}
      </Typography>
    </Box>
  );
};

export default ProgressBar;
