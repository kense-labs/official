import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { configResponsive } from 'ahooks';
import App from './App';
import { initLocale } from './i18n';
import './styles/index.css';

/* Align with Tailwind @theme breakpoints in styles/index.css */
configResponsive({
  sm: 640,
  md: 768,
  lg: 1024,
  xl: 1280,
});

initLocale();

document.documentElement.dataset.theme = 'dark';
document.documentElement.style.colorScheme = 'dark';

const rootEl = document.getElementById('root');
if (rootEl) {
  createRoot(rootEl).render(
    <StrictMode>
      <App />
    </StrictMode>,
  );
}
