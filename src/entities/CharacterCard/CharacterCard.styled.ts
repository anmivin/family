import { styled, Box } from '@mui/material';

export const StyledCard = styled(Box)`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing(2)};
  padding: 20px;
  border-radius: 8px;
  background-color: ${({ theme }) => theme.color.secondaryLight};
`;
