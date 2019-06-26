import React from "react";
import {
  render,
  fireEvent,
  queryByAltText,
  queryByText
} from "@testing-library/react";
import "@testing-library/react/cleanup-after-each";
import "jest-dom/extend-expect";

import Dashboard from "./Dashboard";

describe("The dashboard component", () => {
  it("renders", () => {
    const render = render(<Dashboard />);
  });
});
