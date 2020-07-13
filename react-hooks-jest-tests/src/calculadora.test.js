import React from 'react';
import ReactDOM from 'react-dom';
import Calculadora from './calculadora';

it("renders without crashing", () => {
  const div = document.createElement('div');
  ReactDOM.render(<Calculadora />, div);
  ReactDOM.unmountComponentAtNode(div);
})