import React from "react";
import { render, fireEvent } from "react-testing-library";
import App from "./App";
import "jest-dom/extend-expect";

it("renders without crashing", () => {
  render(<App />);
});

describe("The baseball app", () => {
  describe("button functionality", () => {
    it("has a strike button that logs strikes", () => {
      const { getByText, getByTestId } = render(<App />);

      const button = getByText("Strike");

      fireEvent.click(button);
      const strikes = getByTestId("Strikes");

      expect(strikes).toHaveTextContent(/1 Strikes/i);
    });
    it("has a ball button that logs balls", () => {
      const { getByText, getByTestId } = render(<App />);

      const button = getByText("Ball");

      fireEvent.click(button);
      const balls = getByTestId("Balls");

      expect(balls).toHaveTextContent(/1 Balls/i);
    });
    it("has a foul button that logs fouls", () => {
      const { getByText, getByTestId } = render(<App />);

      const button = getByText("Foul");

      fireEvent.click(button);
      const fouls = getByTestId("Fouls");

      expect(fouls).toHaveTextContent(/1 Fouls/i);
    });
    it("has a hit button that resets all counts", () => {
      const { getByText, getByTestId } = render(<App />);

      const strikeButton = getByText("Strike");
      const ballButton = getByText("Ball");
      const foulButton = getByText("Foul");
      const button = getByText("Hit");

      fireEvent.click(ballButton);
      fireEvent.click(strikeButton);
      fireEvent.click(foulButton);
      fireEvent.click(button);

      const selectedBalls = getByTestId("Balls");
      const selectedStrikes = getByTestId("Strikes");
      const selectedFouls = getByTestId("Fouls");

      expect(selectedBalls).toHaveTextContent(/0 Balls/i);
      expect(selectedStrikes).toHaveTextContent(/0 Strikes/i);
      expect(selectedFouls).toHaveTextContent(/0 Strikes/i);
    });
  });
  it("resets when player reaches 3 strikes", () => {
    const { getByText, getByTestId } = render(<App strikes={2} />);

    const button = getByText("Strike");

    fireEvent.click(button);

    const selectedBalls = getByTestId("Balls");
    const selectedStrikes = getByTestId("Strikes");
    const selectedFouls = getByTestId("Fouls");

    expect(selectedBalls).toHaveTextContent(/0 Balls/i);
    expect(selectedStrikes).toHaveTextContent(/0 Strikes/i);
    expect(selectedFouls).toHaveTextContent(/0 Strikes/i);
  });

  it("resets when player reaches 4 balls", () => {
    const { getByText, getByTestId } = render(<App balls={3} />);

    const button = getByText("Ball");

    fireEvent.click(button);

    const selectedBalls = getByTestId("Balls");
    const selectedStrikes = getByTestId("Strikes");
    const selectedFouls = getByTestId("Fouls");

    expect(selectedBalls).toHaveTextContent(/0 Balls/i);
    expect(selectedStrikes).toHaveTextContent(/0 Strikes/i);
    expect(selectedFouls).toHaveTextContent(/0 Strikes/i);
  });
});
