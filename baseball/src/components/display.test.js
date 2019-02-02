import React from 'react';
import {render} from "react-testing-library";
import "jest-dom/extend-expect";
import Display from "./Display";

describe("Display component", () => {
   it("renders the dashboard component", () => {
      render(<Display />)
   })
   it("displays balls, strikes, outs", () => {
      const component = render(<Display />)
      const balls = component.getByTestId("balls");
      const strikes = component.getByTestId("strikes");
      const outs = component.getByTestId("outs");

      expect(balls).toHaveTextContent(/balls/i);
      expect(strikes).toHaveTextContent(/strikes/i);
      expect(outs).toHaveTextContent(/outs/i);
   })
   it("displays first values", () => {
      const component = render(<Display />)
      const balls = component.getByTestId("balls");
      const strikes = component.getByTestId("strikes");
      const outs = component.getByTestId("outs");

      expect(balls).toHaveTextContent("0");
      expect(strikes).toHaveTextContent("0");
      expect(outs).toHaveTextContent("0");
   })
})