import React from 'react';
import ReactDOM from 'react-dom';
import Button from './../button';

import { render, cleanup } from '@testing-library/react';
import renderer from 'react-test-renderer';

import '@testing-library/jest-dom/extend-expect';

afterEach(cleanup);
it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<Button></Button>, div);
})

it("renders button correctly", () => {
  const { getByTestId } = render(<Button label="click me" />);
  expect(getByTestId('button')).toHaveTextContent("click me")
});

it("renders button correctly", () => {
  const { getByTestId } = render(<Button label="save" />);
  expect(getByTestId('button')).toHaveTextContent("save")
});

it("matches snapshot", () => {
  const tree = renderer.create(<Button label="save" />).toJSON();
  expect(tree).toMatchSnapshot();
})
