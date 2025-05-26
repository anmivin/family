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
    primaryMain: commonColors.blue400,
    primaryDark: commonColors.blue500,
    primaryLight: commonColors.blue300,

    secondaryMain: commonColors.blue200,
    secondaryDark: commonColors.blue300,
    secondaryLight: commonColors.blue100,

    textMain: commonColors.dark900,
    textDark: commonColors.pink900,
    textLight: commonColors.dark900,

    accentMain: commonColors.pink400,
    accentDark: commonColors.pink500,
    accentLight: commonColors.pink300,
  },
  [ThemeName._2]: {
    primaryMain: commonColors.green400,
    primaryDark: commonColors.green500,
    primaryLight: commonColors.green300,

    secondaryMain: commonColors.green200,
    secondaryDark: commonColors.green300,
    secondaryLight: commonColors.green100,

    textMain: commonColors.dark900,
    textDark: commonColors.violet900,
    textLight: commonColors.dark600,

    accentMain: commonColors.violet400,
    accentDark: commonColors.violet600,
    accentLight: commonColors.violet200,
  },
  [ThemeName._3]: {
    primaryMain: commonColors.marine800,
    primaryDark: commonColors.marine900,
    primaryLight: commonColors.marine700,

    secondaryMain: commonColors.dark800,
    secondaryDark: commonColors.dark900,
    secondaryLight: commonColors.dark500,

    textMain: commonColors.light900,
    textDark: commonColors.light900,
    textLight: commonColors.light900,

    accentMain: commonColors.marine600,
    accentDark: commonColors.marine600,
    accentLight: commonColors.marine200,
  },
  [ThemeName._4]: {
    primaryMain: commonColors.blue100,
    primaryDark: commonColors.blue100,
    primaryLight: commonColors.blue100,

    secondaryMain: commonColors.blue300,
    secondaryDark: commonColors.blue300,
    secondaryLight: commonColors.blue300,

    textMain: commonColors.dark900,
    textDark: commonColors.dark900,
    textLight: commonColors.dark900,

    accentMain: commonColors.blue700,
    accentDark: commonColors.blue700,
    accentLight: commonColors.blue700,
  },
  [ThemeName._5]: {
    primaryMain: commonColors.blue300,
    primaryDark: commonColors.blue300,
    primaryLight: commonColors.blue300,

    secondaryMain: commonColors.blue300,
    secondaryDark: commonColors.blue300,
    secondaryLight: commonColors.blue300,

    textMain: commonColors.dark900,
    textDark: commonColors.dark900,
    textLight: commonColors.dark900,

    accentMain: commonColors.blue700,
    accentDark: commonColors.blue700,
    accentLight: commonColors.blue700,
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
  [ThemeName.BabushkasHearth]: {
    primaryMain: commonColors.autumn,
    primaryDark: commonColors.blue300,
    primaryLight: commonColors.blue300,

    secondaryMain: commonColors.tan,
    secondaryDark: commonColors.blue300,
    secondaryLight: commonColors.blue300,

    textMain: commonColors.blue300,
    textDark: commonColors.blue300,
    textLight: commonColors.blue300,

    accentMain: commonColors.ochre,
    accentDark: commonColors.blue300,
    accentLight: commonColors.blue300,
  },
  [ThemeName.TsaristGold]: {
    primaryMain: commonColors.royalblue,
    primaryDark: commonColors.blue300,
    primaryLight: commonColors.blue300,

    secondaryMain: commonColors.yellow,
    secondaryDark: commonColors.blue300,
    secondaryLight: commonColors.blue300,

    textMain: commonColors.blue300,
    textDark: commonColors.blue300,
    textLight: commonColors.blue300,

    accentMain: commonColors.madder,
    accentDark: commonColors.blue300,
    accentLight: commonColors.blue300,
  },
  [ThemeName.SovietMinimal]: {
    primaryMain: commonColors.jet,
    primaryDark: commonColors.blue300,
    primaryLight: commonColors.blue300,

    secondaryMain: commonColors.cardinal,
    secondaryDark: commonColors.blue300,
    secondaryLight: commonColors.blue300,

    textMain: commonColors.blue300,
    textDark: commonColors.blue300,
    textLight: commonColors.blue300,

    accentMain: commonColors.gold,
    accentDark: commonColors.blue300,
    accentLight: commonColors.blue300,
  },
  [ThemeName.ForestSpirit]: {
    primaryMain: commonColors.forest,
    primaryDark: commonColors.blue300,
    primaryLight: commonColors.blue300,

    secondaryMain: commonColors.cambridge,
    secondaryDark: commonColors.blue300,
    secondaryLight: commonColors.blue300,

    textMain: commonColors.blue300,
    textDark: commonColors.blue300,
    textLight: commonColors.blue300,

    accentMain: commonColors.amber,
    accentDark: commonColors.blue300,
    accentLight: commonColors.blue300,
  },
  [ThemeName.MidnightCastle]: {
    primaryMain: commonColors.purple,
    primaryDark: commonColors.blue300,
    primaryLight: commonColors.blue300,

    secondaryMain: commonColors.french,
    secondaryDark: commonColors.blue300,
    secondaryLight: commonColors.blue300,

    textMain: commonColors.blue300,
    textDark: commonColors.blue300,
    textLight: commonColors.blue300,

    accentMain: commonColors.oark,
    accentDark: commonColors.blue300,
    accentLight: commonColors.blue300,
  },
  [ThemeName.SunriseMotivator]: {
    primaryMain: commonColors.orange,
    primaryDark: commonColors.blue300,
    primaryLight: commonColors.blue300,

    secondaryMain: commonColors.sky,
    secondaryDark: commonColors.blue300,
    secondaryLight: commonColors.blue300,

    textMain: commonColors.blue300,
    textDark: commonColors.blue300,
    textLight: commonColors.blue300,

    accentMain: commonColors.hotpink,
    accentDark: commonColors.blue300,
    accentLight: commonColors.blue300,
  },
  [ThemeName.CandyChaos]: {
    primaryMain: commonColors.rosepink,
    primaryDark: commonColors.blue300,
    primaryLight: commonColors.blue300,

    secondaryMain: commonColors.teal,
    secondaryDark: commonColors.blue300,
    secondaryLight: commonColors.blue300,

    textMain: commonColors.blue300,
    textDark: commonColors.blue300,
    textLight: commonColors.blue300,

    accentMain: commonColors.chartreus,
    accentDark: commonColors.blue300,
    accentLight: commonColors.blue300,
  },
  [ThemeName.ArcticChill]: {
    primaryMain: commonColors.phototblue,
    primaryDark: commonColors.blue300,
    primaryLight: commonColors.blue300,

    secondaryMain: commonColors.gray,
    secondaryDark: commonColors.blue300,
    secondaryLight: commonColors.blue300,

    textMain: commonColors.blue300,
    textDark: commonColors.blue300,
    textLight: commonColors.blue300,

    accentMain: commonColors.red,
    accentDark: commonColors.blue300,
    accentLight: commonColors.blue300,
  },
  [ThemeName.AutumnHarvest]: {
    primaryMain: commonColors.burntorange,
    primaryDark: commonColors.blue300,
    primaryLight: commonColors.blue300,

    secondaryMain: commonColors.sunset,
    secondaryDark: commonColors.blue300,
    secondaryLight: commonColors.blue300,

    textMain: commonColors.blue300,
    textDark: commonColors.blue300,
    textLight: commonColors.blue300,

    accentMain: commonColors.ferngreen,
    accentDark: commonColors.blue300,
    accentLight: commonColors.blue300,
  },
  [ThemeName.PixelLegends]: {
    primaryMain: commonColors.hookergreen,
    primaryDark: commonColors.blue300,
    primaryLight: commonColors.blue300,

    secondaryMain: commonColors.night,
    secondaryDark: commonColors.blue300,
    secondaryLight: commonColors.blue300,

    textMain: commonColors.blue300,
    textDark: commonColors.blue300,
    textLight: commonColors.blue300,

    accentMain: commonColors.vermilion,
    accentDark: commonColors.blue300,
    accentLight: commonColors.blue300,
  },
  [ThemeName.TheFinalFrontier]: {
    primaryMain: commonColors.night1,
    primaryDark: commonColors.blue300,
    primaryLight: commonColors.blue300,

    secondaryMain: commonColors.violet,
    secondaryDark: commonColors.blue300,
    secondaryLight: commonColors.blue300,

    textMain: commonColors.blue300,
    textDark: commonColors.blue300,
    textLight: commonColors.blue300,

    accentMain: commonColors.bittersweet,
    accentDark: commonColors.blue300,
    accentLight: commonColors.blue300,
  },
  [ThemeName.TeaAndTidy]: {
    primaryMain: commonColors.teagreen,
    primaryDark: commonColors.blue300,
    primaryLight: commonColors.blue300,

    secondaryMain: commonColors.parchement,
    secondaryDark: commonColors.blue300,
    secondaryLight: commonColors.blue300,

    textMain: commonColors.blue300,
    textDark: commonColors.blue300,
    textLight: commonColors.blue300,

    accentMain: commonColors.claret,
    accentDark: commonColors.blue300,
    accentLight: commonColors.blue300,
  },
  [ThemeName.TheLostSock]: {
    primaryMain: commonColors.daysgray,
    primaryDark: commonColors.blue300,
    primaryLight: commonColors.blue300,

    secondaryMain: commonColors.whitesmoke1,
    secondaryDark: commonColors.blue300,
    secondaryLight: commonColors.blue300,

    textMain: commonColors.blue300,
    textDark: commonColors.blue300,
    textLight: commonColors.blue300,

    accentMain: commonColors.arangepeel,
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
