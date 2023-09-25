import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';  // or the name of your main component
import './index.css';
import { BrowserRouter } from 'react-router-dom';
ReactDOM.render(
  <BrowserRouter>
     <React.StrictMode>
        <App />
     </React.StrictMode>
  </BrowserRouter>,
  document.getElementById('root')
);
