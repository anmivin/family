import type { Theme } from '@mui/material';

import type { Media } from './common/media';
import type { FontStyle, Typography } from './common/typography';

import { ThemeKey } from './theme.constants';
import { ColorOptions } from './themeVariants';

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
