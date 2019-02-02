import React from "react";
import Dashboard from "./Dashboard";
import { render, fireEvent } from "react-testing-library";
import "jest-dom/extend-expect";

describe("Dashboard Testing", () => {
  it("renders without crashing", () => {
    const div = document.createElement("div");
    render(<Dashboard />, div);
  });

  it("should render each button Strike, Foul, Hit, Ball", () => {
    const components = render(<Dashboard />);
    const ballBtn = components.getByTestId("ball-btn");
    const strikeBtn = components.getByTestId("strike-btn");
    const foulBtn = components.getByTestId("foul-btn");
    const hitBtn = components.getByTestId("hit-btn");

    fireEvent.click(ballBtn);
    fireEvent.click(strikeBtn);
    fireEvent.click(foulBtn);
    fireEvent.click(hitBtn);

    expect(ballBtn).toHaveTextContent(/ball/i);
    expect(strikeBtn).toHaveTextContent(/strike/i);
    expect(foulBtn).toHaveTextContent(/foul/i);
    expect(hitBtn).toHaveTextContent(/hit/i);
  });

});
