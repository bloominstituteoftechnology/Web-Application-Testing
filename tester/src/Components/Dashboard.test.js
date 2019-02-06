import React from 'react';
import {cleanup, render} from "react-testing-library";
import "jest-dom/extend-expect";
import Dashboard from "./Dashboard";

afterEach(cleanup);
describe("Dashboard component", () => {
   it("renders the dashboard component", () => {
      render(<Dashboard />)
   })
   it("contains header text", () => {
      const component = render(<Dashboard/>);
      const header = component.getByText(/batter up!/i);
      expect(header).toHaveTextContent(/batter up!/i)
    })
}) 