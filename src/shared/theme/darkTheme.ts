import { Components, PaletteOptions, createTheme } from '@mui/material/styles';

import { Theme } from './theme.types';

import { commonColors } from './common/color';
import { commonTheme } from './common/commonTheme';
import { commonComponents } from './common/components';
import { commonPalette } from './common/palette';

export const themeColor = {
  primaryMain: commonColors.mono500,
  primaryDark: commonColors.mono800,
  primaryLight: commonColors.mono200,

  secondaryMain: commonColors.turquoise500,
  secondaryDark: commonColors.turquoise800,
  secondaryLight: commonColors.turquoise200,

  textMain: commonColors.turquoise500,
  textDark: commonColors.mono800,
  textLight: commonColors.mono800,

  successMain: commonColors.green500,
  successDark: commonColors.green800,
  successLight: commonColors.green200,

  infoMain: commonColors.blue500,
  infoDark: commonColors.blue800,
  infoLight: commonColors.blue200,

  warningMain: commonColors.orange500,
  warningLight: commonColors.orange800,
  warningDark: commonColors.orange200,

  errorMain: commonColors.red500,
  errorDark: commonColors.red800,
  errorLight: commonColors.red200,
};

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
