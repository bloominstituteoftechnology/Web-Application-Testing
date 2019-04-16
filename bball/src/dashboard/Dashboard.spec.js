import React from "react";
import { render, fireEvent } from "react-testing-library";
import "jest-dom/extend-expect";

import Dashboard from "./Dashboard.js";

describe("<Dashboard/> Tests", () => {

  it("render test", () => {

    const renderTest = render(<Dashboard />);
  });

});

