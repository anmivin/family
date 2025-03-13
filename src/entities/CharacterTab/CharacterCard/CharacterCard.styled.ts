import { styled, Box } from '@mui/material';

export const StyledCard = styled(Box)`
  display: flex;
  flex-direction: row;
  gap: ${({ theme }) => theme.spacing(6)};
  padding: 20px;
  border-radius: 8px;
  background-color: ${({ theme }) => theme.color.secondaryLight};
`;
