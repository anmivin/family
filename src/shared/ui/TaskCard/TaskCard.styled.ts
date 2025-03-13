import { Typography, Box, styled } from '@mui/material';

export const StyledCard = styled(Box)<{
  isCompleted?: boolean;
  isApproving?: boolean;
  isDeclined?: boolean;
}>`
  background-color: ${({ theme }) => theme.color.secondaryLight};
  padding: 16px;
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing(3)};
  border-radius: 8px;
  cursor: pointer;
  opacity: ${({ isCompleted }) => isCompleted && '0.7'};
  border: ${({ theme, isApproving, isDeclined }) =>
    (isApproving || isDeclined) && `2px solid ${theme.color[isApproving ? 'violet400' : 'red400']}`};
`;

export const StyledDescription = styled(Typography)`
  width: 100%;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
`;
