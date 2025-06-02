import { StyledLinearProgress } from './ProgressBar.styled';
import { Box, Typography } from '@mui/material';
import { ProgressBarProps } from './ProgressBar.types';
const ProgressBar = ({ value, title, subtitle, color, onClick }: ProgressBarProps) => {
  return (
    <Box display="flex" flexDirection="column" gap={2} onClick={onClick}>
      {typeof title === 'string' ? <Typography variant="body1">{title}</Typography> : title}

      <StyledLinearProgress variant="determinate" value={value} barcolor={color} />
      <Typography variant="caption" alignSelf="end">
        {subtitle}
      </Typography>
    </Box>
  );
};

export default ProgressBar;
