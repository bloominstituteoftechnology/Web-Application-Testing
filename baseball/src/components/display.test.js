import React from 'react';
import {render} from "react-testing-library";
import "jest-dom/extend-expect";
import Dashboard from "./Dashboard";
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
      const dashboard = render(<Dashboard />)
      const display = render(<Display />)
      const bvalue = display.getByTestId("bvalue");
      // const strikes = component.getByTestId("strikes");
      // const outs = component.getByTestId("outs");

      expect(bvalue).toHaveTextContent("0");
      // expect(strikes).toHaveTextContent("0");
      // expect(outs).toHaveTextContent("0");
   })
})