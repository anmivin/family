import type { Theme } from '@mui/material';

import type { Breakpoints, Media } from './common/media';
import type { FontStyle, Typography } from './common/typography';
import type { Color, ColorOptions } from './lightTheme';
import { ThemeKey } from './theme.constants';

export type { Color, ColorOptions, Breakpoints, Media };

export type PaletteMode = ThemeKey;

export type ExtTheme = {
  // theme colors
  color: ColorOptions;
  // styled media query helper
  media: Media;
  // mui font styles
  typography: Typography;
  // css font styles
  fontStyle: FontStyle;
};

declare module '@mui/material/styles' {
  interface Theme extends ExtTheme {}
  interface ThemeOptions extends Partial<ExtTheme> {}
}

export { Theme };
