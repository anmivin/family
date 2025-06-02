import { Box, styled } from '@mui/material';

export const ToastContainer = styled('div')`
  position: fixed;
  bottom: 60px;
  left: calc(100vw / 2 - 180px);
  display: flex;
  flex-direction: column;
  gap: 8px;
  z-index: 2000;
`;

export const StyledToast = styled(Box)`
  width: 360px;
  padding: ${({ theme }) => theme.spacing(3)};
  border: 2px solid;
  border-radius: 8px;
  &.success {
    background: ${({ theme }) => theme.color.green200};
    border-color: ${({ theme }) => theme.color.green800};
    .MuiTypography-root {
      color: ${({ theme }) => theme.color.green900};
    }
  }
  &.warning {
    background: ${({ theme }) => theme.color.yellow200};
    border-color: ${({ theme }) => theme.color.yellow800};
    .MuiTypography-root {
      color: ${({ theme }) => theme.color.yellow900};
    }
  }
  &.info {
    background: ${({ theme }) => theme.color.blue200};
    border-color: ${({ theme }) => theme.color.blue800};
    .MuiTypography-root {
      color: ${({ theme }) => theme.color.blue900};
    }
  }
  &.error {
    background: ${({ theme }) => theme.color.red200};
    border-color: ${({ theme }) => theme.color.red800};
    .MuiTypography-root {
      color: ${({ theme }) => theme.color.red900};
    }
  }
`;
