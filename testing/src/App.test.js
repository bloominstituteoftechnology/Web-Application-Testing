import React from "react";
import { render } from "@testing-library/react";
import App from "./App";
import Dashboard from "./components/Dashboard";

test("Renders App coponent without crashing", () => {
  render(<App />);
});

test("Dashboard renders to the page", () => {
  const { getByText } = render(<Dashboard />);
  getByText(/STRIKE/);
  getByText(/BALLS/);
  getByText(/FOULS/);
  getByText(/HITS/);
  getByText(/Play Ball!/);
});

test("Display renders to the page", () => {
  const { getByText } = render(<App />);
  getByText(/Strikes/);
  getByText(/Balls/);
  getByText(/Hits/);
});
