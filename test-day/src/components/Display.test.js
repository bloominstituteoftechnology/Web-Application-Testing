import React from "react";
import Display from "./Display";
import { render } from "@testing-library/react";
import "@testing-library/react/cleanup-after-each";

describe("<Display />", () => {
  it("renders without crashing", () => {
    render(<Display />);
  });

  it("props work", () => {
    const display = render(<Display strikes={1} balls={2} />);
    display.getByText(/Strikes: 1/);
    display.getByText(/Balls: 2/);
  });
});
