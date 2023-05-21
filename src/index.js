import React from 'react';
import ReactDOM from 'react-dom/client';
import './scss/index.scss';
import reportWebVitals from './reportWebVitals';
import Home from './pages/Home';
import { ToDoProvider } from './Context/TodoProvider';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ToDoProvider>
    <React.StrictMode>
      <Home />
    </React.StrictMode>
  </ToDoProvider>
);
reportWebVitals();
