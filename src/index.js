import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import Storecontextprovider from './Storecontext';

ReactDOM.render(
  <BrowserRouter>
  <Storecontextprovider>
  <App />
  </Storecontextprovider>
  </BrowserRouter>,
  document.getElementById('root')
);
