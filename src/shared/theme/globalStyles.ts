import { css } from '@mui/material/styles';

import { Theme } from './theme.types';

export const globalStyles = (theme: Theme) => css`
  body {
    margin: 0;
    font-family: ${theme.typography.fontFamily || 'Roboto'}, sans-serif;
    font-size: ${theme.typography.body1.fontSize}px;
    line-height: ${theme.typography.body1.lineHeight};
    letter-spacing: ${theme.typography.body1.letterSpacing}px;
    font-weight: ${theme.typography.body1.fontWeight};
    color: ${theme.color.textMain};

    font-feature-settings: 'tnum' on, 'lnum' on;
    color: #000;
    background-color: ${theme.color.secondaryMain};
    /*     overflow: hidden; */
  }

  p,
  span,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    margin: 0;
    margin-bottom: ${theme.spacing(4)};
    color: ${theme.color.textMain};
  }

  p {
    margin-bottom: ${theme.spacing(2)};
  }

  *,
  *:before,
  *:after {
    box-sizing: border-box;
  }

  *::-webkit-scrollbar {
    width: 6px;
    height: 6px;
    border-radius: 4px;
  }

  *::-webkit-scrollbar-track {
    background-color: transparent;
    width: 16px;
  }

  *::-webkit-scrollbar-thumb {
    background-color: ${theme.color.secondaryDark};
    border-radius: 8px;
    min-height: 24px;

    &:active,
    &:hover {
      background-color: ${theme.color.secondaryLight};
    }
  }
`;
