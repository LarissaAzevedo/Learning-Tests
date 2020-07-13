import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Calculadora from './calculadora';
import 'bootstrap/dist/css/bootstrap.min.css';

ReactDOM.render(
  <React.StrictMode>
    <Calculadora />
  </React.StrictMode>,
  document.getElementById('root')
);