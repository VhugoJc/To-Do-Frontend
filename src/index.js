import React from 'react';
import ReactDOM from 'react-dom/client';
import './scss/index.scss';
import reportWebVitals from './reportWebVitals';
import Home from './pages/Home';
import { ToDoProvider } from './context/TodoProvider';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ToDoProvider>  {/* useContext */}
    <React.StrictMode>
      <Home />
    </React.StrictMode>
  </ToDoProvider>
);
reportWebVitals();
