import React from "react";
import { render, fireEvent } from "react-testing-library";
import "jest-dom/extend-expect";
import Display from "../Display/Display";

describe("Strike button", () => {
  it("should render strikes", () => {
    const { getByTestId, getByText } = render(<Display />);

    const button = getByTestId("strike-btn");
    const totStrikes = getByText(/strikes/i);
    fireEvent.click(button);
    fireEvent.click(button);
    fireEvent.click(button);
    expect(totStrikes).toHaveTextContent(3);
  });
});

describe("Hit button", () => {
  it("should render hits", () => {
    const { getByTestId, getByText } = render(<Display />);

    const button = getByTestId("hits-btn");
    const totStrikes = getByText(/strikes/i);
    fireEvent.click(button);
    expect(totStrikes).toHaveTextContent(1);
  });
});
