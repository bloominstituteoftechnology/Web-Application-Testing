import React from 'react';

import {render, cleanup} from 'react-testing-library';
import'jest-dom/extend-expect';

import Dashboard from '../components/Dashboard';
// import Display from '../components/Display';

afterEach(cleanup)

it('renders without crashing', () => {
  
  render(<Dashboard />);
 
});

describe("The Dashboard component", () => {
  it("contains a strike button", () => {
    const component = render(<Dashboard />);
    const button = component.getByTestId("Strike");
    expect(button).toHaveTextContent(/Strike/i);
  })
  it("contains a foul button", () => {
    const component = render(<Dashboard />);
    const button = component.getByTestId("Foul");
    expect(button).toHaveTextContent(/Foul/i);
  })
  it("contains a ball button", () => {
    const component = render(<Dashboard />);
    const button = component.getByTestId("Ball");
    expect(button).toHaveTextContent(/Ball/i);
  })
  it("contains a hit button", () => {
    const component = render(<Dashboard />);
    const button = component.getByTestId("Hit");
    expect(button).toHaveTextContent(/Hit/i);
  })
})
