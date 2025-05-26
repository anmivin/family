import { ToastProps } from './Toast.types';
import { StyledToast } from './Toast.styled';
import clsx from 'clsx';
import { IconButton, Typography } from '@mui/material';
const Toast = ({ onClose, title, content, level }: ToastProps) => {
  return (
    <StyledToast className={clsx(level)}>
      {title}
      {onClose && (
        <IconButton size="small" onClick={onClose}>
          x
        </IconButton>
      )}

      <Typography>{content}</Typography>
    </StyledToast>
  );
};

export default Toast;
