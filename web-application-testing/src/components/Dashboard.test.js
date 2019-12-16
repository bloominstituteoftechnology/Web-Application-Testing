import React from "react";
import { render } from "@testing-library/react";
import { Dashboard } from "./Dashboard";

test("Dashboard renders", () => {
  render(<Dashboard />);
});

test("Strike Button renders on page", () => {
  const { getByTestId } = render(<Dashboard />);

  getByTestId(/strike-button/i);
});