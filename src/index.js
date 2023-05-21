import React from 'react';
import ReactDOM from 'react-dom/client';
import './scss/index.scss';
import reportWebVitals from './reportWebVitals';
import Home from './pages/Home';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Home/>
  </React.StrictMode>
);
reportWebVitals();
