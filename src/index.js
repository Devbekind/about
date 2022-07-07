import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import './under_navbar.css';
import under_root from './under_root'; 

const root = ReactDOM.createRoot(document.getElementById('root'));


root.render(
  <React.StrictMode>
    <>
    <App />
    <under_root/>
    </>
  </React.StrictMode>
);
