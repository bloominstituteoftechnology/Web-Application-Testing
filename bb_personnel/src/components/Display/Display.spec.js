import React from "react";
import { render } from "react-testing-library";
import "jest-dom/extend-expect";
import Display from "./Display";

describe("<Display />", () => {
  it("should render strikes", () => {
    const { getByTestId, debug } = render(<Display />);

    const strikeOuts = getByTestId("strikeOuts");

    expect(strikeOuts);
  });
});
