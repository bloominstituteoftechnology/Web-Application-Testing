import React from "react";
import Dashboard from "./Dashboard";
import { render, fireEvent } from "react-testing-library";
import "jest-dom/extend-expect";

describe("DASHBOARD", () => {
  it("Renders without crashing.", () => {
    const div = document.createElement("div");
    render(<Dashboard />, div);
  });

  it("Should render each button.", () => {
    const components = render(<Dashboard />);

    const strikeButton = components.getByTestId("strike-btn");
    const ballButton = components.getByTestId("ball-btn");
    const foulButton = components.getByTestId("foul-btn");
    const hitButton = components.getByTestId("hit-btn");

    fireEvent.click(strikeButton);
    fireEvent.click(ballButton);
    fireEvent.click(foulButton);
    fireEvent.click(hitButton);

    expect(strikeButton).toHaveTextContent(/strike!/i);
    expect(ballButton).toHaveTextContent(/ball!/i);
    expect(foulButton).toHaveTextContent(/foul!/i);
    expect(hitButton).toHaveTextContent(/hit!/i);
  });
});