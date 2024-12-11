import { commonColors, CommonColor } from './common/color';
import { commonTheme } from './common/commonTheme';
import { commonComponents } from './common/components';
import { ThemeName } from './theme.constants';
import { Components, createTheme } from '@mui/material/styles';

export const themeColor: Record<
  ThemeName,
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

    accentMain: string;
    accentDark: string;
    accentLight: string;
  }
> = {
  [ThemeName._1]: {
    primaryMain: commonColors.blue100,
    primaryDark: commonColors.blue800,
    primaryLight: commonColors.blue200,

    secondaryMain: commonColors.blue300,
    secondaryDark: commonColors.blue300,
    secondaryLight: commonColors.blue300,

    textMain: commonColors.transparentDark900,
    textDark: commonColors.transparentDark900,
    textLight: commonColors.transparentDark600,

    accentMain: commonColors.blue500,
    accentDark: commonColors.blue300,
    accentLight: commonColors.blue300,
  },
  [ThemeName._2]: {
    primaryMain: commonColors.pink300,
    primaryDark: commonColors.blue300,
    primaryLight: commonColors.blue300,

    secondaryMain: commonColors.blue300,
    secondaryDark: commonColors.blue300,
    secondaryLight: commonColors.blue300,

    textMain: commonColors.blue300,
    textDark: commonColors.blue300,
    textLight: commonColors.blue300,

    accentMain: commonColors.blue300,
    accentDark: commonColors.blue300,
    accentLight: commonColors.blue300,
  },
  [ThemeName._3]: {
    primaryMain: commonColors.green300,
    primaryDark: commonColors.blue300,
    primaryLight: commonColors.blue300,

    secondaryMain: commonColors.blue300,
    secondaryDark: commonColors.blue300,
    secondaryLight: commonColors.blue300,

    textMain: commonColors.blue300,
    textDark: commonColors.blue300,
    textLight: commonColors.blue300,

    accentMain: commonColors.blue300,
    accentDark: commonColors.blue300,
    accentLight: commonColors.blue300,
  },
  [ThemeName._4]: {
    primaryMain: commonColors.blue300,
    primaryDark: commonColors.blue300,
    primaryLight: commonColors.blue300,

    secondaryMain: commonColors.blue300,
    secondaryDark: commonColors.blue300,
    secondaryLight: commonColors.blue300,

    textMain: commonColors.blue300,
    textDark: commonColors.blue300,
    textLight: commonColors.blue300,

    accentMain: commonColors.blue300,
    accentDark: commonColors.blue300,
    accentLight: commonColors.blue300,
  },
  [ThemeName._5]: {
    primaryMain: commonColors.blue300,
    primaryDark: commonColors.blue300,
    primaryLight: commonColors.blue300,

    secondaryMain: commonColors.blue300,
    secondaryDark: commonColors.blue300,
    secondaryLight: commonColors.blue300,

    textMain: commonColors.blue300,
    textDark: commonColors.blue300,
    textLight: commonColors.blue300,

    accentMain: commonColors.blue300,
    accentDark: commonColors.blue300,
    accentLight: commonColors.blue300,
  },
  [ThemeName._6]: {
    primaryMain: commonColors.blue300,
    primaryDark: commonColors.blue300,
    primaryLight: commonColors.blue300,

    secondaryMain: commonColors.blue300,
    secondaryDark: commonColors.blue300,
    secondaryLight: commonColors.blue300,

    textMain: commonColors.blue300,
    textDark: commonColors.blue300,
    textLight: commonColors.blue300,

    accentMain: commonColors.blue300,
    accentDark: commonColors.blue300,
    accentLight: commonColors.blue300,
  },
};

export const color = { ...themeColor, ...commonColors } as const;

interface ThemeColor {
  primaryMain: string;
  primaryDark: string;
  primaryLight: string;

  secondaryMain: string;
  secondaryDark: string;
  secondaryLight: string;

  textMain: string;
  textDark: string;
  textLight: string;

  accentMain: string;
  accentDark: string;
  accentLight: string;
}

export type Color = ThemeColor[keyof ThemeColor] & CommonColor;
export type ColorOptions = Record<Color, string>;

export const getTheme = (variant: ThemeName) => {
  const color = { ...themeColor[variant], ...commonColors };
  const components: Components = {
    ...commonComponents(color),
  };
  return createTheme({
    ...commonTheme,
    color,
    components,
  });
};
