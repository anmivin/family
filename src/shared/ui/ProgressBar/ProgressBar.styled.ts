import { styled, LinearProgress } from '@mui/material';
import { ColorType } from './ProgressBar.types';
import { Color } from '@theme/themeVariants';

const ProgressbarColorValues: Record<ColorType, { main: Color; secondary: Color }> = {
  red: { main: 'red600', secondary: 'red200' },
  green: { main: 'green600', secondary: 'green200' },
  blue: { main: 'blue600', secondary: 'blue200' },
  yellow: { main: 'yellow600', secondary: 'yellow200' },
  violet: { main: 'violet600', secondary: 'violet200' },
  orange: { main: 'orange600', secondary: 'orange200' },
};
export const StyledLinearProgress = styled(LinearProgress)<{ barcolor?: ColorType }>`
  height: 10px;
  border-radius: 5px;
  width: 100%;
  margin: 0;
  background-color: ${({ theme, barcolor }) => barcolor && theme.color[ProgressbarColorValues[barcolor].secondary]};
  & .MuiLinearProgress-bar {
    height: 100%;
    background-color: ${({ theme, barcolor }) => barcolor && theme.color[ProgressbarColorValues[barcolor].main]};
  }
`;
