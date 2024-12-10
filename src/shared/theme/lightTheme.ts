import { Components, PaletteOptions, createTheme } from '@mui/material/styles';

import { Theme } from './theme.types';

import { commonColors } from './common/color';
import { commonTheme } from './common/commonTheme';
import { commonComponents } from './common/components';
import { commonPalette } from './common/palette';

export const themeColor = {
  primaryMain: commonColors.pink500,
  primaryDark: commonColors.pink800,
  primaryLight: commonColors.pink200,

  secondaryMain: commonColors.yellow500,
  secondaryDark: commonColors.yellow800,
  secondaryLight: commonColors.yellow200,

  textMain: commonColors.pink800,
  textDark: commonColors.pink800,
  textLight: commonColors.pink800,

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
export type ColorOptions = Record<Color, string>;

export const components: Components = {
  ...commonComponents(color),
};

export const palette: PaletteOptions = {
  mode: 'light',
  ...commonPalette(color),
};

export const lightTheme: Theme = createTheme({
  ...commonTheme,
  color,
  components,
});
