import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { configResponsive } from 'ahooks';
import App from './App';
import { initLocale } from './i18n';
import './styles/index.css';

configResponsive({
  md: 1248,
});

initLocale();

const rootEl = document.getElementById('root');
if (rootEl) {
  createRoot(rootEl).render(
    <StrictMode>
      <App />
    </StrictMode>,
  );
}
