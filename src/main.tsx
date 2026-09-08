import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import { registerSW } from 'virtual:pwa-register';

// Register Service Worker for PWA caching
const updateSW = registerSW({
  onNeedRefresh() {
    // Optional: Prompt user to refresh when an update is available
  },
  onOfflineReady() {
    console.log('App is ready for offline use!');
  },
});

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
