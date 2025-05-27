import Routing from './Routing';
import ThemeColorModeProvider from '@shared/theme/theme.provider';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { Provider } from 'react-redux';
import { setupStore } from '@shared/stores/global.store';
import ruLocale from 'date-fns/locale/ru';

import { UserInit } from './userInit';
import { BrowserRouter } from 'react-router-dom';
import AbilityProvider from '@shared/ability/AbilityContext';
import ToastProvider from '@ui/Toast/ToastProvider';

function App() {
  return (
    <Provider store={setupStore()}>
      <LocalizationProvider dateAdapter={AdapterDateFns} adapterLocale={ruLocale}>
        <ThemeColorModeProvider>
          <BrowserRouter>
            <AbilityProvider>
              <ToastProvider>
                <UserInit>
                  <Routing />
                </UserInit>
              </ToastProvider>
            </AbilityProvider>
          </BrowserRouter>
        </ThemeColorModeProvider>
      </LocalizationProvider>
    </Provider>
  );
}

export default App;
