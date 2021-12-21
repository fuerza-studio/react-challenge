import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import AppProviders from './context';
import { BrowserRouter } from 'react-router-dom';
import { setupServer } from './services/mirage/server';

if (process.env.NODE_ENV === 'development') {
  setupServer();
}

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <AppProviders>
        <App />
      </AppProviders>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
