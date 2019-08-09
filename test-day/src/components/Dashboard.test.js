import React from "react";
import Dashboard from "./Dashboard";
import { render, fireEvent } from "@testing-library/react";
import "@testing-library/react/cleanup-after-each";

describe("<Dashboard />", () => {
  it("renders without crashing", () => {
    render(<Dashboard />);
  });
  it("strike", () => {
    let clicked = false;
    const { getByText } = render(<Dashboard strike={() => (clicked = true)} />);
    getByText(/strike/i);
    const strikeButton = getByText(/strike/i);
    fireEvent.click(strikeButton);
    expect(clicked).toBe(true);
  });
});
