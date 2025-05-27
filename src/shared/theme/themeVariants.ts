import { commonColors, themeColor } from './color';

import { ThemeName } from './theme.constants';
import { createTheme } from '@mui/material/styles';

import { Theme } from './theme.types';
import { media } from './media';
import { fontStyle, typography } from './typography';

export const commonTheme: Theme = createTheme({
  typography,
  fontStyle,
});

export const getTheme = (variant: ThemeName) => {
  const color = { ...themeColor[variant], ...commonColors };

  return createTheme({
    media,
    color,
    spacing: 4,
    typography,
    fontStyle,
  });
};
