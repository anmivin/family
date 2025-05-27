import type { Theme } from '@mui/material';

import type { Media } from './media';
import type { FontStyle, Typography } from './typography';

import { ThemeKey } from './theme.constants';
import { ColorOptions } from './color';

export type PaletteMode = ThemeKey;

export type ExtTheme = {
  color: ColorOptions;
  media: Media;
  typography: Typography;
  fontStyle: FontStyle;
};

declare module '@mui/material/styles' {
  interface Theme extends ExtTheme {}
  interface ThemeOptions extends Partial<ExtTheme> {}
}

export { Theme };
