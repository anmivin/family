import { ReactNode, createContext, useMemo } from 'react';
import { getTheme } from './themeVariants';
import { GlobalStyles } from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';
import { ThemeName } from './theme.constants';
import { globalStyles } from './globalStyles';

import useStorage from '../helpers/usestorage';
import { Theme } from './theme.types';
interface ThemeColorModeProviderProps {
  children: ReactNode;
  currentThemeName?: ThemeName;
}
export const ColorModeContext = createContext({
  changeColorMode: (_: ThemeName) => {},
});

const ThemeColorModeProvider = ({ children, currentThemeName }: ThemeColorModeProviderProps) => {
  const { storedValue: mode, setValue: setMode } = useStorage<ThemeName>('themeMode', currentThemeName || ThemeName._1);

  const colorMode = useMemo(
    () => ({
      changeColorMode: (newMode: ThemeName) => {
        setMode(newMode);
      },
    }),
    [mode, setMode]
  );

  const currentTheme: Theme = useMemo(() => getTheme(mode), [mode]);
  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={currentTheme}>{children}</ThemeProvider>
      <GlobalStyles styles={globalStyles(currentTheme)} />
    </ColorModeContext.Provider>
  );
};

export default ThemeColorModeProvider;
