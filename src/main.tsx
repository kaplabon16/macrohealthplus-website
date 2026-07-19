import React from 'react';
import ReactDOM from 'react-dom/client';
import { MotionConfig } from 'framer-motion';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import './styles/globals.css';

const savedTheme = window.localStorage.getItem('theme');
const preferredTheme = savedTheme === 'light' || savedTheme === 'dark' ? savedTheme : 'system';
document.documentElement.dataset.theme = preferredTheme === 'system'
  ? (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light')
  : preferredTheme;

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <MotionConfig reducedMotion="never">
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </MotionConfig>
  </React.StrictMode>,
);
