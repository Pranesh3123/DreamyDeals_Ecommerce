import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';  // or the name of your main component
import './index.css';
import store from './store';
import {Provider} from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
ReactDOM.render(
  <BrowserRouter>
     <React.StrictMode>
      <Provider store={store}>
         <App />
      </Provider>
     </React.StrictMode>
  </BrowserRouter>,
  document.getElementById('root')
);
