import React from 'react';
import ReactDOM from 'react-dom/client';
import './scss/index.scss';
import reportWebVitals from './reportWebVitals';
import Home from './pages/Home';
import { ToDoProvider } from './Context/TodoProvider';
import { ModalProvider } from './Context/ModalProvder';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ToDoProvider>
    <ModalProvider>
      <React.StrictMode>
        <Home />
      </React.StrictMode>
    </ModalProvider>
  </ToDoProvider>
);
reportWebVitals();
