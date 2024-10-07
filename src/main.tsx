import ReactDOM from 'react-dom/client';
import { isBrowser, isMobileOnly, isTablet } from 'react-device-detect';

import App from './App.tsx';
import MobileApp from './MobileApp.tsx';
import './index.css';
import { BrowserRouter } from 'react-router-dom';

// const width = window.innerWidth;

if (isMobileOnly) {
  ReactDOM.createRoot(document.getElementById('root')!).render(
    <BrowserRouter>
      <MobileApp />
    </BrowserRouter>
  );
} else if (isTablet) {
  ReactDOM.createRoot(document.getElementById('root')!).render(
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );
} else if (isBrowser) {
  ReactDOM.createRoot(document.getElementById('root')!).render(
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );
}
