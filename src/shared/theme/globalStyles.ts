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
    color: #000;
    background-color: ${theme.color.secondaryMain};
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
    width: 0px;
    height: 0px;
  }

  *::-webkit-scrollbar-track {
    width: 0px;
    height: 0px;
  }
`;
