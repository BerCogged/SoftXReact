import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { HistoryContextProvider } from './context/HistoryContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <HistoryContextProvider>
    <App />
    </HistoryContextProvider>
  </React.StrictMode>
);