import Routing from './Routing';
import ThemeColorModeProvider from './shared/theme/theme.provider';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { Provider } from 'react-redux';
import { setupStore } from './shared/store/global.store';
import ruLocale from 'date-fns/locale/ru';
import './shared/theme/fonts/font.css';
import { ReactFlowProvider } from '@xyflow/react';
import '@xyflow/react/dist/style.css';
function App() {
  return (
    <Provider store={setupStore()}>
      <LocalizationProvider dateAdapter={AdapterDateFns} adapterLocale={ruLocale}>
        <ThemeColorModeProvider>
          <ReactFlowProvider>
            <Routing />
          </ReactFlowProvider>
        </ThemeColorModeProvider>
      </LocalizationProvider>
    </Provider>
  );
}

export default App;
