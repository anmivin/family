import { createRoot } from 'react-dom/client';
import App from '@app/App.tsx';
import ReactDOM from 'react-dom';

const isMock = import.meta.env.VITE_BACK_OR_MOCK === 'mock';
async function enableMocking() {
  if (isMock) {
    const { worker } = await import('./shared/mocks/browser');
    return worker.start();
  }
  return;
}

enableMocking().then(() => createRoot(document.getElementById('root')!).render(<App />));
