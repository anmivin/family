import { createTheme } from '@mui/material/styles';
import { getTheme } from './themeVariants';
import { ThemeName } from './theme.constants';

export const theme = {
  [ThemeName._1]: createTheme(getTheme(ThemeName._1)),
  [ThemeName._2]: createTheme(getTheme(ThemeName._2)),
  [ThemeName._3]: createTheme(getTheme(ThemeName._3)),
  [ThemeName._4]: createTheme(getTheme(ThemeName._4)),
  [ThemeName._5]: createTheme(getTheme(ThemeName._5)),
  [ThemeName._6]: createTheme(getTheme(ThemeName._6)),
};
