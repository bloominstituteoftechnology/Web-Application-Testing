import React from "react";
import { render } from "@testing-library/react";
import Display from "./Display.js";
import "@testing-library/react/cleanup-after-each";

describe("<Display />", () => {
  it("display renders", () => {
    render(<Display />);
  });
  it("props work", () => {
    const display = render(<Display strike={1} balls={2} />);
    display.getByText(/Ball score: 2/);
    display.getByText(/Strike score: 1/);
  });
});