import React from 'react';
import {cleanup, render} from "react-testing-library";
import "jest-dom/extend-expect";
import App from './App';

afterEach(cleanup);
describe("app component", () => {
  it('renders without crashing', () => {
    render(<App />)
  });
})
