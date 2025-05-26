import { Toastlevel, ToastProps } from './Toast.types';
import { StyledToast } from './Toast.styled';
import clsx from 'clsx';
import { Box, IconButton, Typography } from '@mui/material';
import { CrossIcon } from '@ui/Icons';
const Toast = ({ onClose, title, content, level }: ToastProps) => {
  const buttonColor = () => {
    switch (level) {
      case Toastlevel.ERROR:
        return 'red800';
      case Toastlevel.WARNING:
        return 'yellow800';
      case Toastlevel.SUCCESS:
        return 'green800';
      default:
        return 'blue800';
    }
  };
  return (
    <StyledToast className={clsx(level)}>
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Typography variant="h6">{title}</Typography>

        <IconButton size="small" onClick={onClose}>
          <CrossIcon color={buttonColor()} size={20} />
        </IconButton>
      </Box>

      <Typography>{content}</Typography>
    </StyledToast>
  );
};

export default Toast;
