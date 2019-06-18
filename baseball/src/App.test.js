import React from "react";
import ReactDOM from "react-dom";
import Dashboard from "./components/dashboard";
import Display from "./components/display";
import { render } from "@testing-library/react"; // << install this
import "@testing-library/react/cleanup-after-each";

import App from "./App";
import { fireEvent } from "@testing-library/react/dist";

describe("<App />", () => {
  it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<App />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it("Should render app", () => {
    render(<App />);
  });

  it("should render number of hit when button is clicked", () => {
    const { getByText } = render(<App />);
    const button = getByText(/HIT/);
    fireEvent.click(button);
    getByText(/Hits: 1/);
  });

  it("should render number of strikes when button is clicked", () => {
    const { getByText } = render(<App />);
    const button = getByText(/STRIKE/);
    fireEvent.click(button);
    getByText(/Strikes: 1/);
  });
});

// Testing the Stat Display

describe("<Display />", () => {
  it("should display the stats", () => {
    render(<Display />);
  });
  it("should display the number hits on the scoreboard", () => {
    const { getByText } = render(<App />);
    getByText(/Hits: 0/);
  });
  it("should display the number balls on the scoreboard", () => {
    const { getByText } = render(<App />);
    getByText(/Balls: 0/);
  });
  it("should display the number hit on the scoreboard", () => {
    const { getByText } = render(<App />);
    getByText(/Hits: 0/);
  });
});
