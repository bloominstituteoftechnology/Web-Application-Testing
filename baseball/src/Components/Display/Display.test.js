import React from "react";
import Display from "./Display";
import { render, fireEvent } from "react-testing-library";
import "jest-dom/extend-expect";
import Dashboard from "../Dashboard/Dashboard";

describe("Display Test", () => {
  it("renders without crashing", () => {
    const div = document.createElement("div");
    render(<Display />, div);
  });

  it("displays the ball count", () => {
    const component = render(<Display />);
    const balls = component.getByTestId(/balls/i);
    const strikes = component.getByTestId(/strikes/i);
    expect(strikes).toHaveTextContent("0");
    expect(balls).toHaveTextContent("0");
  });

  it("should increase ball count onClick", () => {
    const component = render(<Dashboard />);
    const ballBtn = component.getByTestId("ball-btn");
    fireEvent.click(ballBtn);
    const display = render(<Display />);
    const score = display.getByTestId(/balls/i);
    expect(score).toHaveTextContent("1");
  });
  it("should increase strike count onClick", () => {
    const component = render(<Dashboard />);
    const strikeBtn = component.getByTestId("strike-btn");
    fireEvent.click(strikeBtn);
    const display = render(<Display />);
    const score = display.getByTestId(/strikes/i);
    expect(score).toHaveTextContent("1");
  });
  it("should increase strike < 2 when foulBtn is clicked", () => {
    const component = render(<Dashboard />);
    const foulBtn = component.getByTestId("foul-btn");
    fireEvent.click(foulBtn);
    const display = render(<Display />);
    const score = display.getByTestId(/strikes/i);
    expect(score).toHaveTextContent("2");
  });

  it("should reset strikes and balls when hitBtn is clicked", () => {
    const component = render(<Dashboard />);
    const hitBtn = component.getByTestId("hit-btn");
    fireEvent.click(hitBtn);
    const display = render(<Display />);
    const balls = display.getByTestId(/balls/i);
    const strikes = display.getByTestId(/strikes/i);
    expect(balls).toHaveTextContent("0");
    expect(strikes).toHaveTextContent("0");
  });

  it("should reset strikes and balls when >= 3", () => {
    const component = render(<Dashboard />);
    const strikeBtn = component.getByTestId("strike-btn");
    fireEvent.click(strikeBtn);
    fireEvent.click(strikeBtn);
    fireEvent.click(strikeBtn);
    fireEvent.click(strikeBtn);
    const display = render(<Display />);
    const score = display.getByTestId(/strikes/i);
    expect(score).toHaveTextContent("0");
  });

  it("should reset balls and strikes whe >=4 && strikes >= 3", () => {
    const component = render(<Dashboard />);
    const ballBtn = component.getByTestId("ball-btn");
    const strikeBtn = component.getByTestId("strike-btn");
    fireEvent.click(ballBtn);
    fireEvent.click(strikeBtn);
    fireEvent.click(ballBtn);
    fireEvent.click(strikeBtn);
    fireEvent.click(ballBtn);
    fireEvent.click(strikeBtn);
    fireEvent.click(ballBtn);
    const display = render(<Display />);
    const strikes = display.getByTestId(/strikes/i);
    const balls = display.getByTestId(/balls/i);
    expect(strikes).toHaveTextContent("0");
    expect(balls).toHaveTextContent("0");
  });
});
