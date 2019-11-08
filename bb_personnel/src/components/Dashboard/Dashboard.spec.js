import React from "react";
import { render, fireEvent } from "react-testing-library";
import "jest-dom/extend-expect";
import Display from "../Display/Display";

describe("Strike button", () => {
  it("should render strikes", () => {
    const { getByTestId } = render(<Display />);

    const button = getByTestId("strike-btn");
    const totStrikes = getByTestId("strikeOuts");
    fireEvent.click(button);
    fireEvent.click(button);
    fireEvent.click(button);
    expect(totStrikes).toHaveTextContent(3);
  });
});

describe("Hit button", () => {
  it("should render hits", () => {
    const { getByTestId } = render(<Display />);

    const button = getByTestId("hits-btn");
    const strbutton = getByTestId("strike-btn");
    const ballsButton = getByTestId("balls-btn");
    const totStrikes = getByTestId("strikeOuts");
    const balls = getByTestId("ballsTotal");
    const hits = getByTestId("hitsTotal");

    fireEvent.click(strbutton);
    fireEvent.click(strbutton);
    fireEvent.click(ballsButton);
    fireEvent.click(ballsButton);
    fireEvent.click(button);
    expect(totStrikes).toHaveTextContent(0);
    expect(balls).toHaveTextContent(0);
    expect(hits).toHaveTextContent(1);
  });
});

describe("Balls button", () => {
  it("should render balls", () => {
    const { getByTestId, getByText } = render(<Display />);

    const button = getByTestId("balls-btn");
    const totStrikes = getByText(/strikes/i);
    fireEvent.click(button);
    fireEvent.click(button);
    fireEvent.click(button);
    fireEvent.click(button);
    expect(totStrikes).toHaveTextContent(0);
  });
});
