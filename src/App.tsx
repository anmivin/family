import Routing from './Routing';
import ThemeColorModeProvider from './shared/theme/theme.provider';
import './shared/theme/fonts/font.css';
function App() {
  return (
    <ThemeColorModeProvider>
      <Routing />
    </ThemeColorModeProvider>
  );
}

export default App;
