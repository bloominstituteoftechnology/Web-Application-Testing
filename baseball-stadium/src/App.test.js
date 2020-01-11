import React from "react";
import * as rtl from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import App from "./App";
import { Dashboard } from "./components/Dashboard";
import { fireEvent } from "@testing-library/react";

afterEach(rtl.cleanup);

describe("<App />", () => {
  it("renders without crashing", () => {
    const wrapper = rtl.render(<App />);
    // const wrapper = rtl.render(<h2>test</h2>);
    // wrapper.queryByText(/baseball testing/i);
    // console.log(wrapper.debug());
  });

  describe("<Dashboard />", () => {
    it("renders module", () => {
      const wrapper = rtl.render(<Dashboard />);
    });

    it("strike btn has text 'Strike'", () => {
      const { getByText } = rtl.render(<Dashboard />);
      expect(getByText(/strike/i)).toHaveTextContent(/strike/i);
    });

    it("strike btn clicked", () => {
      const { getByText } = rtl.render(<Dashboard />);
      fireEvent.click(getByText(/strike/i));
    });
  });
});
