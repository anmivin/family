import { Box, styled } from '@mui/material';

export const StyledToast = styled(Box)`
  width: 360px;

  &.success {
    background: ${({ theme }) => theme.color.green400};
  }
  &.warning {
    background: ${({ theme }) => theme.color.yellow400};
  }
  &.info {
    background: ${({ theme }) => theme.color.blue400};
  }
  &.error {
    background: ${({ theme }) => theme.color.red400};
  }
`;
