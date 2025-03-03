import Routing from './Routing';
import ThemeColorModeProvider from '@theme/theme.provider';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { Provider } from 'react-redux';
import { setupStore } from '@stores/global.store';
import ruLocale from 'date-fns/locale/ru';
import '@theme/fonts/font.css';
import { ReactFlowProvider } from '@xyflow/react';
import '@xyflow/react/dist/style.css';
import { UserInit } from './userInit';
import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <Provider store={setupStore()}>
      <LocalizationProvider dateAdapter={AdapterDateFns} adapterLocale={ruLocale}>
        <ThemeColorModeProvider>
          <ReactFlowProvider>
            <BrowserRouter>
              <UserInit>
                <Routing />
              </UserInit>
            </BrowserRouter>
          </ReactFlowProvider>
        </ThemeColorModeProvider>
      </LocalizationProvider>
    </Provider>
  );
}

export default App;
