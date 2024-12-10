import Routing from './Routing';
import ThemeColorModeProvider from './shared/theme/theme.provider';
function App() {
  return (
    <ThemeColorModeProvider>
      <Routing />
    </ThemeColorModeProvider>
  );
}

export default App;
