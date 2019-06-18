import React from "react";
import ReactDOM from "react-dom";
import { render } from "@testing-library/react"; // << install this
import "@testing-library/react/cleanup-after-each";

import App from "./App";
import { fireEvent } from "@testing-library/react/dist";

describe("<App />", () => {
  it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<App />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it("renders without errors", () => {
    const queries = render(<App />);
    // if there are errors rendering the component, the test will fail
  });


});

// show an h2 with Hello World
