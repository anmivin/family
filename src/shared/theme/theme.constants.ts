export enum ThemeName {
  light = 'light',
  dark = 'dark',
}

export type ThemeKey = keyof typeof ThemeName;
