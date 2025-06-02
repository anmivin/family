import { ReactNode, createContext, useCallback, useMemo } from 'react';
import { getTheme } from './themeVariants';
import { GlobalStyles } from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';
import { ThemeName } from './theme.constants';
import { globalStyles } from './globalStyles';
import { useLocalStorage } from '@shared/helpers/useLocalstorage';
import { Theme } from './theme.types';
import '@shared/theme/fonts/font.css';

export const ColorModeContext = createContext({
  mode: ThemeName,
  changeColorMode: (_: ThemeName) => {},
});

const ThemeColorModeProvider = ({ children }: { children: ReactNode }) => {
  const [mode, setMode] = useLocalStorage<ThemeName>('themeMode', ThemeName.BabushkasHearth);

  const changeColorMode = useCallback(
    (newMode: ThemeName) => {
      setMode(newMode);
    },

    [mode, setMode]
  );

  const currentTheme: Theme = useMemo(() => getTheme(mode), [mode]);
  return (
    <ColorModeContext.Provider value={{ mode, changeColorMode }}>
      <ThemeProvider theme={currentTheme}>{children}</ThemeProvider>
      <GlobalStyles styles={globalStyles(currentTheme)} />
    </ColorModeContext.Provider>
  );
};

export default ThemeColorModeProvider;
