// src/main.jsx

import React from 'react';
import ReactDOM from 'react-dom/client';  // Se importa 'react-dom/client' para React 18
import { Provider } from 'react-redux';
import store from './state/store';
import App from './App';

// Crear el root usando React 18
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
