/* import SimsFont from '@assets/fonts/Loucos Lyne - thesimssansbold.otf'; */
import { Components } from '@mui/material/styles';

import { ColorOptions } from '../theme.types';
import { typography } from './typography';

export const customFont = {
  fontFamily: 'SimsFont',
  fontStyle: 'semi-bold',
  fontDisplay: 'swap',
  fontWeight: '600',
  /*   src: `
   local('SimsFont'),
   url(${SimsFont}) format('otf')
 `, */
};

export const commonComponents = (color: ColorOptions): Components => ({
  MuiFormLabel: {
    styleOverrides: {
      root: {
        ...typography.subtitle1,
        lineHeight: '22px',
      },
      asterisk: {
        color: color.infoMain,
      },
    },
  },
  MuiFormControl: {
    styleOverrides: {
      root: {
        ...typography.subtitle1,
      },
    },
  },
  MuiFormControlLabel: {
    styleOverrides: {
      root: {
        marginLeft: -9,
      },
    },
  },
  MuiButtonBase: {
    defaultProps: {
      disableRipple: true,
    },
  },
  MuiButton: {
    styleOverrides: {
      startIcon: {
        marginLeft: 0,
        marginRight: 0,
      },
      endIcon: {
        marginLeft: 0,
        marginRight: 0,
      },
    },
  },
  MuiInputBase: {
    styleOverrides: {
      root: {
        ...typography.subtitle1,
      },
    },
  },
  MuiDialog: {
    styleOverrides: {
      paper: {
        overflow: 'visible',
      },
    },
  },
  MuiSelect: {
    styleOverrides: {
      select: {
        '.MuiChip-root': {
          ...typography.subtitle1,
          height: 24,
          color: color.errorLight,

          '.MuiChip-label': {
            padding: '0 8px',
          },
        },
      },
    },
  },
  MuiMenuItem: {
    styleOverrides: {
      root: {
        position: 'relative',
        transition: 'background-color 0.1s ease-out',

        '&:before': {
          content: '""',
          display: 'block',
          position: 'absolute',
          inset: 0,
          transition: 'background-color 0.1s ease-out',
          backgroundColor: 'transparent',
          pointerEvents: 'none',
        },
        '&:hover': {
          backgroundColor: color.actionHover,
        },
        '&.Mui-focusVisible': {
          backgroundColor: color.errorMain,
        },
        '&:active': {
          backgroundColor: color.primaryMain,
        },
        '&.Mui-selected': {
          backgroundColor: 'inherit',
          '&:hover': {
            backgroundColor: color.infoLight,
          },
          '> *': {
            zIndex: 3,
          },
          '&:before': {
            backgroundColor: color.errorMain,
          },
        },
      },
    },
  },
});

export default commonComponents;
