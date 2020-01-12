import React from "react";
import * as rtl from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import App from "../App";

afterEach(rtl.cleanup);

describe("<App />", () => {
  it("renders without crashing", () => {
    const wrapper = rtl.render(<App />);
    // const wrapper = rtl.render(<h2>test</h2>);
    // wrapper.queryByText(/baseball testing/i);
    // console.log(wrapper.debug());
  });
});
