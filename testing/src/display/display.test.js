import React from "react";
import Display from "./display";
import { render, fireEvent } from "react-testing-library";
import "jest-dom/extend-expect";
import Dashboard from "./dashboard";

describe("Display Test", () => {
  it("renders without crashing", () => {
    const div = document.createElement("div");
    render(<Display />, div);
  });

  it("Displays balls", () => {
    const component = render(<Display />);
    const balls = component.getByTestId(/balls/i);
    const strikes = component.getByTestId(/strikes/i);
    expect(strikes).toHaveTextContent("0");
    expect(balls).toHaveTextContent("0");
  });

  it("Increases balls onClick", () => {
    const component = render(<Dashboard />);
    const ballButton = component.getByTestId("ball-btn");
    fireEvent.click(ballButton);
    const display = render(<Display />);
    const stats = display.getByTestId(/balls/i);
    expect(stats).toHaveTextContent("1");
  });
  it("increases strikes onClick", () => {
    const component = render(<Dashboard />);
    const strikeButton = component.getByTestId("strike-btn");
    fireEvent.click(strikeButton);
    const display = render(<Display />);
    const stats = display.getByTestId(/strikes/i);
    expect(stats).toHaveTextContent("1");
  });

  it("increases strikes < 2 when foul button is clicked", () => {
    const component = render(<Dashboard />);
    const foulButton = component.getByTestId("foul-btn");
    fireEvent.click(foulButton);
    const display = render(<Display />);
    const stats = display.getByTestId(/strikes/i);
    expect(stats).toHaveTextContent("2");
  });

  it("Resets strikes and balls when hits Button is clicked", () => {
    const component = render(<Dashboard />);
    const hitButton = component.getByTestId("hit-btn");
    fireEvent.click(hitButton);
    const display = render(<Display />);
    const balls = display.getByTestId(/balls/i);
    const strikes = display.getByTestId(/strikes/i);
    expect(balls).toHaveTextContent("0");
    expect(strikes).toHaveTextContent("0");
  });

  it("Resets strikes and balls at >= 3", () => {
    const component = render(<Dashboard />);
    const strikeButton = component.getByTestId("strike-btn");
    fireEvent.click(strikeButton);
    fireEvent.click(strikeButton);
    fireEvent.click(strikeButton);
    fireEvent.click(strikeButton);
    const display = render(<Display />);
    const stats = display.getByTestId(/strikes/i);
    expect(stats).toHaveTextContent("0");
  });

  it("Resets balls and strikes at >= 4 and strikes >= 3", () => {
    const component = render(<Dashboard />);
    const ballButton = component.getByTestId("ball-btn");
    const strikeButton = component.getByTestId("strike-btn");
    fireEvent.click(ballButton);
    fireEvent.click(strikeButton);
    fireEvent.click(ballButton);
    fireEvent.click(strikeButton);
    fireEvent.click(ballButton);
    fireEvent.click(strikeButton);
    fireEvent.click(ballButton);
    const display = render(<Display />);
    const strikes = display.getByTestId(/strikes/i);
    const balls = display.getByTestId(/balls/i);
    expect(strikes).toHaveTextContent("0");
    expect(balls).toHaveTextContent("0");
  });
});