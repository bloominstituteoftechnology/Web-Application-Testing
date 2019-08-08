import React from 'react';
import ReactDOM from 'react-dom';
//import App from './App';

import {
  render,
  fireEvent,
  getByText,
  toHaveTextContent
} from "@testing-library/react";
import "@testing-library/react/cleanup-after-each";
import App from "./App";

describe("<App />", () => {
  it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<App />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});