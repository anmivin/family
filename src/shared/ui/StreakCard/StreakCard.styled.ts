import { styled, Button } from '@mui/material';
import { Link } from 'react-router-dom';
export const StyledLink = styled(Link)`
  text-decoration: none;
  display: flex;
  flex-direction: row;
  gap: ${({ theme }) => theme.spacing(3)};
  align-items: center;
  padding: ${({ theme }) => theme.spacing(2, 2, 2, 4)};
  background-color: ${({ theme }) => theme.color.secondaryLight};
  border: ${({ theme }) => `2px solid ${theme.color.primaryMain}`};
  border-radius: 8px;
`;
