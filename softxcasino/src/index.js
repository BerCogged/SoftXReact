import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { HistoryContextProvider } from './context/HistoryContext';
import { AuthContextProvider } from './context/AuthContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <AuthContextProvider>
      <HistoryContextProvider>
        <App />
      </HistoryContextProvider>
    </AuthContextProvider>
  </React.StrictMode>
);