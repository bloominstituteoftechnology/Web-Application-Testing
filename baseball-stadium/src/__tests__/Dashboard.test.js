import React from "react";
import * as rtl from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { Dashboard } from "../components/Dashboard";

afterEach(rtl.cleanup);

describe("<Dashboard />", () => {
  it("renders without crashing", () => {
    const wrapper = rtl.render(<Dashboard />);
  });

  it("strike btn has text 'Strike'", () => {
    const { getByText } = rtl.render(<Dashboard />);
    expect(getByText(/strike/i)).toHaveTextContent(/strike/i);
  });

  describe("Buttons", () => {
    it("strike btn clicked", () => {
      const { getByText } = rtl.render(<Dashboard />);
      rtl.fireEvent.click(getByText(/strike/i));
    });

    it("ball btn clicked", () => {
      const { getByText } = rtl.render(<Dashboard />);
      rtl.fireEvent.click(getByText(/ball/i));
    });

    it("foul btn clicked", () => {
      const { getByText } = rtl.render(<Dashboard />);
      rtl.fireEvent.click(getByText(/foul/i));
    });

    it("error btn clicked", () => {
      const { getByText } = rtl.render(<Dashboard />);
      rtl.fireEvent.click(getByText(/error/i));
    });

    it("reset btn clicked", () => {
      const { getByText } = rtl.render(<Dashboard />);
      rtl.fireEvent.click(getByText(/reset/i));
    });

    it("single btn clicked", () => {
      const { getByText } = rtl.render(<Dashboard />);
      rtl.fireEvent.click(getByText(/single/i));
    });

    it("double btn clicked", () => {
      const { getByText } = rtl.render(<Dashboard />);
      rtl.fireEvent.click(getByText(/double/i));
    });

    it("triple btn clicked", () => {
      const { getByText } = rtl.render(<Dashboard />);
      rtl.fireEvent.click(getByText(/triple/i));
    });

    it("homeRun btn clicked", () => {
      const { getByText } = rtl.render(<Dashboard />);
      rtl.fireEvent.click(getByText(/home run/i));
    });
  });
});
