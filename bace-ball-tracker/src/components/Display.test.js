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

  it("Increase strike count when clicked", () => {
    const component = render(<Dashboard />);
    const strikeButton = component.getByTestId("strike-btn");
    fireEvent.click(strikeButton);
    const display = render(<Display />);
    const strike = display.getByTestId(/strikes/i);
    expect(strike).toHaveTextContent("1");
  });

  it("Increase ball count when clicked", () => {
    const component = render(<Dashboard />);
    const ballButton = component.getByTestId("ball-btn");
    fireEvent.click(ballButton);
    const display = render(<Display />);
    const ball = display.getByTestId(/balls/i);
    expect(ball).toHaveTextContent("1");
  });

  it("Increase strike count when foul button is clicked, only if less than 3 strikes", () => {
    const component = render(<Dashboard />);
    const foulButton = component.getByTestId("foul-btn");
    fireEvent.click(foulButton);
    const display = render(<Display />);
    const foul = display.getByTestId(/fouls/i);
    expect(foul).toHaveTextContent("1");
  });

  it("Reset strikes and balls when hit is clicked", () => {
    const component = render(<Dashboard />);
    const hitButton = component.getByTestId("hit-btn");
    fireEvent.click(hitButton);
    const display = render(<Display />);
    const balls = display.getByTestId(/balls/i);
    const strikes = display.getByTestId(/strikes/i);
    expect(balls).toHaveTextContent("0");
    expect(strikes).toHaveTextContent("0");
  });
});