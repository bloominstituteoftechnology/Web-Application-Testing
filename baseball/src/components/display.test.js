import React from 'react';
import {cleanup, render, fireEvent} from "react-testing-library";
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
      const strikevalue = display.getByTestId(/strikevalue/i);
      const outvalue = display.getByTestId(/outvalue/i);
      const hitvalue = display.getByTestId(/hitvalue/i);
      const foulvalue = display.getByTestId(/foulvalue/i);

      expect(bvalue).toHaveTextContent("0");
      expect(strikevalue).toHaveTextContent("0");
      expect(outvalue).toHaveTextContent("0");
      expect(hitvalue).toHaveTextContent("0");
      expect(foulvalue).toHaveTextContent("0");
   })
})

describe("test button click", () => {
   it("test increase of strike button", () => {
      const props = {
         balls: 0,
         strikes: 0,
         fouls: 0,
         outs: 0,
         hits: 0,
      }
      const display = render(<Display {...props}/>)
      const dashboard = render(<Dashboard />)

      const button = dashboard.getByText(/strike/i)
      fireEvent.click(button);

      const strikevalue = display.getByTestId("strikevalue");
      expect(strikevalue).toHaveTextContent("1");
   })
})