import React from "react";
import Display from "./Display";
import Dashboard from "./Dashboard";
import { render, fireEvent } from "react-testing-library";
import "jest-dom/extend-expect";

describe("DISPLAY", () => {
  it("Renders without crashing.", () => {
    const div = document.createElement("div");
    render(<Display />, div);
  });

  it("Display the strike count", () => {
    const component = render(<Display />);
    const strike = component.getByTestId(/strikes/i);
    expect(strike).toHaveTextContent(0);
  });
});
