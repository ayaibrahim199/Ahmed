import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css'; // or './styles/global.css' if that's your file
import './styles/global.css';
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
