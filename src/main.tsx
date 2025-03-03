import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import ReactDOM from 'react-dom';

/* async function enableMocking() {
  const { worker } = await import('./shared/mocks/browser');
  return worker.start();
} */

/* enableMocking().then(() => */ createRoot(document.getElementById('root')!).render(<App />) /* ) */;
