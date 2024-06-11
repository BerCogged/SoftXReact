import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { HistoryContextProvider } from './context/HistoryContext';
import { AuthContextProvider } from './context/AuthContext';
import { CardContextProvider } from './context/CardContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <CardContextProvider>  
      <AuthContextProvider>
        <HistoryContextProvider>
          <App />
        </HistoryContextProvider>
      </AuthContextProvider>
    </CardContextProvider>
  </React.StrictMode>
);