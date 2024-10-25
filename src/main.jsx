
//Vite requires Node.js
//npm create vite@latest // create new React project using vite
//npx vite dev // start dev server, aliases: `vite dev`, `vite serve`
//npx vite build // build for production 


import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);