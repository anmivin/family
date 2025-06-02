import { ThemeName } from './theme.constants';

export const commonColors = {
  pink100: '#FEDDDF',
  pink200: '#FEBCC6',
  pink300: '#FD9AB4',
  pink400: '#FB80AD',
  pink500: '#F957A2',
  pink600: '#D63F94',
  pink700: '#B32B85',
  pink800: '#901B74',
  pink900: '#771069',

  red100: '#FFE6D6',
  red200: '#FFC6AE',
  red300: '#FFA085',
  red400: '#FF7B67',
  red500: '#FF3F35',
  red600: '#DB262C',
  red700: '#B71A2D',
  red800: '#93102B',
  red900: '#7A0A2A',

  orange100: '#FFF1D3',
  orange200: '#FFDEA6',
  orange300: '#FFC77A',
  orange400: '#FFB059',
  orange500: '#FF8B23',
  orange600: '#DB6A19',
  orange700: '#B74E11',
  orange800: '#93360B',
  orange900: '#7A2506',

  yellow100: '#FFFCCF',
  yellow200: '#FFF89F',
  yellow300: '#FFF36F',
  yellow400: '#FFEE4B',
  yellow500: '#FFE70F',
  yellow600: '#DBC40A',
  yellow700: '#B7A207',
  yellow800: '#938104',
  yellow900: '#7A6902',

  grass100: '#F5FDCB',
  grass200: '#EAFB98',
  grass300: '#D6F364',
  grass400: '#C1E73D',
  grass500: '#A3D804',
  grass600: '#87B902',
  grass700: '#6D9B02',
  grass800: '#547D01',
  grass900: '#436700',

  green100: '#ECFED6',
  green200: '#D4FDAE',
  green300: '#B5FA86',
  green400: '#97F667',
  green500: '#68F136',
  green600: '#48CF27',
  green700: '#2EAD1B',
  green800: '#188B11',
  green900: '#0A730B',

  marine100: '#D4FDE2',
  marine200: '#AAFCCE',
  marine300: '#7EF7BF',
  marine400: '#5DF0B9',
  marine500: '#2BE6B3',
  marine600: '#1FC5A8',
  marine700: '#15A59A',
  marine800: '#0D8385',
  marine900: '#08626E',

  blue100: '#D8ECFE',
  blue200: '#B1D6FE',
  blue300: '#8ABDFE',
  blue400: '#6DA7FD',
  blue500: '#3D83FC',
  blue600: '#2C65D8',
  blue700: '#1E4AB5',
  blue800: '#133392',
  blue900: '#0B2378',

  violet100: '#F8DFFE',
  violet200: '#EFC0FE',
  violet300: '#E1A1FC',
  violet400: '#D189FA',
  violet500: '#B962F7',
  violet600: '#9147D4',
  violet700: '#6D31B1',
  violet800: '#4D1F8F',
  violet900: '#361276',

  light50: 'rgba(255, 255, 255, 0.05)',
  light100: 'rgba(255, 255, 255, 0.1)',
  light150: 'rgba(255, 255, 255, 0.15)',
  light200: 'rgba(255, 255, 255, 0.2)',
  light250: 'rgba(255, 255, 255, 0.25)',
  light300: 'rgba(255, 255, 255, 0.3)',
  light350: 'rgba(255, 255, 255, 0.35)',
  light400: 'rgba(255, 255, 255, 0.4)',
  light450: 'rgba(255, 255, 255, 0.45)',
  light500: 'rgba(255, 255, 255, 0.5)',
  light550: 'rgba(255, 255, 255, 0.55)',
  light600: 'rgba(255, 255, 255, 0.6)',
  light650: 'rgba(255, 255, 255,0.65)',
  light700: 'rgba(255, 255, 255, 0.7)',
  light750: 'rgba(255, 255, 255, 0.75)',
  light800: 'rgba(255, 255, 255, 0.8)',
  light850: 'rgba(255, 255, 255, 0.85)',
  light900: 'rgba(255, 255, 255, 0.9)',
  light950: 'rgba(255, 255, 255, 0.95)',
  light: 'rgba(255, 255, 255, 1)',

  dark50: 'rgba(0, 0, 0, 0.05)',
  dark100: 'rgba(0, 0, 0,0.1)',
  dark150: 'rgba(0, 0, 0, 0.15)',
  dark200: 'rgba(0, 0, 0,0.2)',
  dark250: 'rgba(0, 0, 0, 0.25)',
  dark300: 'rgba(0, 0, 0, 0.3)',
  dark350: 'rgba(0, 0, 0, 0.35)',
  dark400: 'rgba(0, 0, 0, 0.4)',
  dark450: 'rgba(0, 0, 0, 0.45)',
  dark500: 'rgba(0, 0, 0, 0.5)',
  dark550: 'rgba(0, 0, 0, 0.55)',
  dark600: 'rgba(0, 0, 0,0.6)',
  dark650: 'rgba(0, 0, 0,0.65)',
  dark700: 'rgba(0, 0, 0, 0.7)',
  dark750: 'rgba(0, 0, 0, 0.75)',
  dark800: 'rgba(0, 0, 0, 0.8)',
  dark850: 'rgba(0, 0, 0, 0.85)',
  dark900: 'rgba(0, 0, 0, 0.9)',
  dark950: 'rgba(0, 0, 0, 0.95)',
  dark: 'rgba(0, 0, 0, 1)',

  //babushka
  oldlace: '#fff3e0',
  //tsarist
  ivory: 'fffff0',
  //soviet
  cardinal: '#C91F37',
  //forest
  cosmiclatte: '#F8F4E3',
  //midnight
  jet1: '#2D2D2D',
  //sunrise
  white: '#FFFFFF',
  //candy
  lemon: '#FFFACD',
  //arctic
  antiflash: '#F0F4F8',
  //autumn
  seashell: '#FDF6EE',
  //pixel
  night: '#111111',
  //frontier
  eerieblack: '#1E1E1E',
  //tea
  babypowder: '#FAF9F6',
  //sock
  platinum: '#EAEAEA',
} as const;

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
export const themeColor: Record<ThemeName, ThemeColor> = {
  [ThemeName.BabushkasHearth]: {
    primaryMain: '#a52a2a',
    primaryDark: '#7C2020',
    primaryLight: '#BB5F5F',

    secondaryMain: '#d2b48c',
    secondaryDark: '#AE9573',
    secondaryLight: '#E0CCB1',

    textMain: '#1A1A1A',
    textDark: commonColors.blue300,
    textLight: commonColors.blue300,

    accentMain: '#cc7722',
    accentDark: '#995919',
    accentLight: '#DFAA76',
  },
  [ThemeName.TsaristGold]: {
    primaryMain: '#2c2a6e',
    primaryDark: '#212053',
    primaryLight: '#504F87',

    secondaryMain: '#ffb700',
    secondaryDark: '#D39700',
    secondaryLight: '#FFD260',

    textMain: '#111111',
    textDark: commonColors.blue300,
    textLight: commonColors.blue300,

    accentMain: '#9e1b34',
    accentDark: '#771527',
    accentLight: '#AF4357',
  },
  [ThemeName.SovietMinimal]: {
    primaryMain: '#333333',
    primaryDark: '#262626',
    primaryLight: '#575757',

    secondaryMain: '#C91F37',
    secondaryDark: '#971729',
    secondaryLight: '#D2465A',

    textMain: '#000000',
    textDark: commonColors.blue300,
    textLight: commonColors.blue300,

    accentMain: '#FFD700',
    accentDark: '#D3B100',
    accentLight: '#FFE13C',
  },
  [ThemeName.ForestSpirit]: {
    primaryMain: '#228B22',
    primaryDark: '#1C731C',
    primaryLight: '#48A048',

    secondaryMain: '#A8C3A1',
    secondaryDark: '#8BA185',
    secondaryLight: '#BED2B9',

    textMain: '#1A1A1A',
    textDark: commonColors.blue300,
    textLight: commonColors.blue300,

    accentMain: '#FFBF00',
    accentDark: '#D39E00',
    accentLight: '#FFCF3F',
  },
  [ThemeName.MidnightCastle]: {
    primaryMain: '#2E1B3B',
    primaryDark: commonColors.blue300,
    primaryLight: commonColors.blue300,

    secondaryMain: '#C0C6D4',
    secondaryDark: '#261731',
    secondaryLight: '#41304D',

    textMain: '#FFFFFF',
    textDark: commonColors.blue300,
    textLight: commonColors.blue300,

    accentMain: '#8B0000',
    accentDark: '#730000',
    accentLight: '#A33434',
  },
  [ThemeName.SunriseMotivator]: {
    primaryMain: '#FFA500',
    primaryDark: commonColors.blue300,
    primaryLight: commonColors.blue300,

    secondaryMain: '#87CEEB',
    secondaryDark: commonColors.blue300,
    secondaryLight: commonColors.blue300,

    textMain: '#000000',
    textDark: commonColors.blue300,
    textLight: commonColors.blue300,

    accentMain: '#FF69B4',
    accentDark: commonColors.blue300,
    accentLight: commonColors.blue300,
  },
  [ThemeName.CandyChaos]: {
    primaryMain: '#FF66CC',
    primaryDark: commonColors.blue300,
    primaryLight: commonColors.blue300,

    secondaryMain: '#008080',
    secondaryDark: commonColors.blue300,
    secondaryLight: commonColors.blue300,

    textMain: '#2A0040',
    textDark: commonColors.blue300,
    textLight: commonColors.blue300,

    accentMain: '#7FFF00',
    accentDark: commonColors.blue300,
    accentLight: commonColors.blue300,
  },
  [ThemeName.ArcticChill]: {
    primaryMain: '#A8DADC',
    primaryDark: commonColors.blue300,
    primaryLight: commonColors.blue300,

    secondaryMain: '#76787A',
    secondaryDark: commonColors.blue300,
    secondaryLight: commonColors.blue300,

    textMain: '#000000',
    textDark: commonColors.blue300,
    textLight: commonColors.blue300,

    accentMain: '#E63946',
    accentDark: commonColors.blue300,
    accentLight: commonColors.blue300,
  },
  [ThemeName.AutumnHarvest]: {
    primaryMain: '#B85B1E',
    primaryDark: commonColors.blue300,
    primaryLight: commonColors.blue300,

    secondaryMain: '#F2C47E',
    secondaryDark: commonColors.blue300,
    secondaryLight: commonColors.blue300,

    textMain: '#222222',
    textDark: commonColors.blue300,
    textLight: commonColors.blue300,

    accentMain: '#5A7F5A',
    accentDark: commonColors.blue300,
    accentLight: commonColors.blue300,
  },
  [ThemeName.PixelLegends]: {
    primaryMain: '#3B755F',
    primaryDark: commonColors.blue300,
    primaryLight: commonColors.blue300,

    secondaryMain: '#4A789C',
    secondaryDark: commonColors.blue300,
    secondaryLight: commonColors.blue300,

    textMain: '#111111',
    textDark: commonColors.blue300,
    textLight: commonColors.blue300,

    accentMain: '#FF3333',
    accentDark: commonColors.blue300,
    accentLight: commonColors.blue300,
  },
  [ThemeName.TheFinalFrontier]: {
    primaryMain: '#121212',
    primaryDark: commonColors.blue300,
    primaryLight: commonColors.blue300,

    secondaryMain: '#7F00FF',
    secondaryDark: commonColors.blue300,
    secondaryLight: commonColors.blue300,

    textMain: '#FFFFFF',
    textDark: commonColors.blue300,
    textLight: commonColors.blue300,

    accentMain: '#FF6F61',
    accentDark: commonColors.blue300,
    accentLight: commonColors.blue300,
  },
  [ThemeName.TeaAndTidy]: {
    primaryMain: '#BCD2B0',
    primaryDark: '#809078',
    primaryLight: '#D2E0C9',

    secondaryMain: '#F8EED2',
    secondaryDark: '#CDC4AE',
    secondaryLight: '#FAF4E3',

    textMain: '#1A1A1A',
    textDark: commonColors.blue300,
    textLight: commonColors.blue300,

    accentMain: '#8E2541',
    accentDark: '#60192D',
    accentLight: '#B26A7D',
  },
  [ThemeName.TheLostSock]: {
    primaryMain: '#4D4D4D',
    primaryDark: commonColors.blue300,
    primaryLight: commonColors.blue300,

    secondaryMain: '#F2F2F2',
    secondaryDark: commonColors.blue300,
    secondaryLight: commonColors.blue300,

    textMain: '#111111',
    textDark: commonColors.blue300,
    textLight: commonColors.blue300,

    accentMain: '#FFA000',
    accentDark: commonColors.blue300,
    accentLight: commonColors.blue300,
  },
};

export const color = { ...themeColor[ThemeName.BabushkasHearth], ...commonColors } as const;

export type Color = keyof typeof color;
export type ColorOptions = Record<Color, string>;
