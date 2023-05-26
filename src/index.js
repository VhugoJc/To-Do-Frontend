import React from 'react';
import ReactDOM from 'react-dom/client';
import './scss/index.scss';
import Home from './pages/Home';

import { ToDoProvider } from './Context/TodoProvider';
import { ModalProvider } from './Context/ModalProvder';
import { printAsciiLogo } from './config/ascii_logo';
import {FilterProvider} from './Context/FilterProvider';
import Providers from './Provider';

const root = ReactDOM.createRoot(document.getElementById('root'));
printAsciiLogo();
root.render(
  <Providers // Component to avoid Context Hell
    providers={[
      <ModalProvider/>,
      <FilterProvider/>,
      <ToDoProvider/>
    ]}
  >
    <Home />
  </Providers>
);
