import { PaletteOptions } from '@mui/material/styles';

import { ColorOptions } from '../theme.types';

export const commonPalette: (color: ColorOptions) => PaletteOptions = (color) => ({
  primary: {
    main: color.infoDark,
  },
  secondary: {
    main: color.infoDark,
  },
  error: {
    main: color.infoDark,
  },
  success: {
    main: color.infoDark,
  },
  warning: {
    main: color.infoDark,
  },
  default: {
    main: color.infoDark,
  },
  background: {
    default: color.infoDark,
    paper: color.primaryMain,
  },
  text: {
    primary: color.infoDark,
    secondary: color.infoDark,
    disabled: color.infoDark,
  },
});
