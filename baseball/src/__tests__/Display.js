import React from 'react';

import {render} from 'react-testing-library';
import'jest-dom/extend-expect';

import Dashboard from '../components/Dashboard';
// import Display from '../components/Display';

it('renders without crashing', () => {
  
  render(<Display />);
 
});

describe("The Display component", () => {
  it("displays strikes", () => {
    const component = render(<Display strikes={2} balls={1} fouls={2}/>);
    const button = component.getByTestId("Strike");
    expect(button).toHaveTextContent(/2 Strikes/i);
  })
  it("displays fouls", () => {
    const component = render(<Display strikes={2} balls={1} fouls={2}/>);
    const button = component.getByTestId("Foul");
    expect(button).toHaveTextContent(/2 Fouls/i);
  })
  it("displays balls", () => {
    const component = render(<Display strikes={2} balls={1} fouls={2}/>);
    const button = component.getByTestId("Ball");
    expect(button).toHaveTextContent(/1 Balls/i);
  })
})
