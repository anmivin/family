import Routing from './Routing';
import ThemeColorModeProvider from './shared/theme/theme.provider';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';

import ruLocale from 'date-fns/locale/ru';
import './shared/theme/fonts/font.css';

function App() {
  return (
    <LocalizationProvider dateAdapter={AdapterDateFns} adapterLocale={ruLocale}>
      <ThemeColorModeProvider>
        <Routing />
      </ThemeColorModeProvider>
    </LocalizationProvider>
  );
}

export default App;
