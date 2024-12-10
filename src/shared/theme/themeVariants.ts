import { Components, PaletteOptions, createTheme } from '@mui/material/styles';

import { Theme } from './theme.types';

import { commonColors } from './common/color';
import { commonTheme } from './common/commonTheme';
import { commonComponents } from './common/components';
import { commonPalette } from './common/palette';

enum ThemeVariants {}

export const themeColor: Record<
  ThemeVariants,
  {
    primaryMain: string;
    primaryDark: string;
    primaryLight: string;

    secondaryMain: string;
    secondaryDark: string;
    secondaryLight: string;

    textMain: string;
    textDark: string;
    textLight: string;

    successMain: string;
    successDark: string;
    successLight: string;

    infoMain: string;
    infoDark: string;
    infoLight: string;

    warningMain: string;
    warningLight: string;
    warningDark: string;

    errorMain: string;
    errorDark: string;
    errorLight: string;
  }
> = {[]: {}};

export const color = { ...themeColor, ...commonColors } as const;

export type Color = keyof typeof color;

export const components: Components = {
  ...commonComponents(color),
};

export const palette: PaletteOptions = {
  mode: 'dark',
  ...commonPalette(color),
};

export const darkTheme: Theme = createTheme({
  ...commonTheme,
  color,
  components,
});
