import React from "react";
// step 1 - the imports
import * as rtl from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import App from "./App";

// step 2 - set up the cleanup
afterEach(rtl.cleanup);
// beforeEach, beforeAll, afterAll

it("renders without crashing", () => {
  // step 3 - mount the component we want to test
  const wrapper = rtl.render(<App />);
});
