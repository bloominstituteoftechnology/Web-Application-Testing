import { render } from "@testing-library/React";
import React from "react";
import Display from "./Display";

describe("<Display />", () => {
  it("renders without crashing", () => {
    render(<Display />);
  });
});

describe("<Display />", () => {
  const container = render(<Display />);
  console.log(container);
  // Act - getting the node by text
  container.getByText(/home score:/i);
  container.getByText(/away score:/i);
});
