import React from "react";
import * as rtl from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import "@babel/plugin-proposal-class-properties";
import App from "./App";
// const App = require("./App");

describe("App", () => {
  console.log("testing...", App);
  it("renders without crashing", () => {
    const wrapper = rtl.render(<App />);
    // wrapper.queryByText(/baseball testing/i);
    console.log(wrapper.debug());
  });
  // describe("Display Module", ()=> {

  // })
});
