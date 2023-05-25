import React from 'react';
import ReactDOM from 'react-dom/client';
import './scss/index.scss';
import reportWebVitals from './reportWebVitals';
import Home from './pages/Home';
import { ToDoProvider } from './Context/TodoProvider';
import { ModalProvider } from './Context/ModalProvder';
import { printAsciiLogo } from './config/ascii_logo';
import {FilterProvider} from './Context/FilterProvider';

const root = ReactDOM.createRoot(document.getElementById('root'));
printAsciiLogo();
root.render(
  <React.StrictMode>
    <ModalProvider>
      <FilterProvider>
        <ToDoProvider>
          <Home />
        </ToDoProvider>
      </FilterProvider>
    </ModalProvider>
  </React.StrictMode>
);
reportWebVitals();
