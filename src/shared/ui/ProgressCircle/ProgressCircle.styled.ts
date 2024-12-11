import { styled } from '@mui/material/styles';

export const StyledSvg = styled('svg')`
  transform: rotate(-90deg);
  .path1 {
    stroke: ${({ theme }) => theme.color.accentLight};
  }
  .path2 {
    stroke: ${({ theme }) => theme.color.accentMain};
  }
`;
