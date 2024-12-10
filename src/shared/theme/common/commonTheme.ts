import { createTheme } from '@mui/material/styles';

import { Theme } from '../theme.types';
import { media } from './media';
import { fontStyle, typography } from './typography';

export const commonTheme: Theme = createTheme({
  media,
  typography,
  fontStyle,
  spacing: 4,
});

export default commonTheme;
