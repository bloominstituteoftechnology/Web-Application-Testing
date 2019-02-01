import React from "react";
// import ReactDOM from 'react-dom';
import Dashboard from "./Dashboard";
import { render } from "react-testing-library";
import "jest-dom/extend-expect";

it("renders without crashing", () => {
  const div = document.createElement("div");
  render(<Dashboard />, div);
  // ReactDOM.unmountComponentAtNode(div);
});
