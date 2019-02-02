import React from 'react';
import {cleanup, render} from "react-testing-library";
import "jest-dom/extend-expect";
import Dashboard from "./Dashboard";
import Display from "./Display";

afterEach(cleanup);
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
      const props = {
            balls: 0,
            strikes: 0,
            fouls: 0,
            outs: 0,
            hits: 0,
      }
      const display = render(<Display {...props}/>)
      const bvalue = display.getByTestId(/bvalue/i);

      // const strikes = component.getByTestId("strikes");
      // const outs = component.getByTestId("outs");

      expect(bvalue).toHaveTextContent("0");
      // expect(strikes).toHaveTextContent("0");
      // expect(outs).toHaveTextContent("0");
   })
})