import { ReactNode } from 'react';

import { GlobalStyles } from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';

import { globalStyles } from './globalStyles';
import { theme } from './theme';

interface ThemeColorModeProviderProps {
  children: ReactNode;
}

const ThemeColorModeProvider = ({ children }: ThemeColorModeProviderProps) => {
  return (
    <>
      <ThemeProvider theme={theme.light}>{children}</ThemeProvider>
      <GlobalStyles styles={globalStyles(theme.light)} />
    </>
  );
};

export default ThemeColorModeProvider;
