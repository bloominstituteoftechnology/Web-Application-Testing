import React from 'react';
// import ReactDOM from 'react-dom';
import { render } from '@testing-library/react';
import * as rtl from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import App from './App.js';
import Display from './components/display.js';
import Dashboard, {addBall, addStrike} from './components/dashboard.js';

// const { getByText } = render(<App />);

test('renders display component', () => {
  const { getByText } = render(<Display />);
  const displayElement = getByText(/home/i);
  expect(displayElement).toBeInTheDocument();
});

test('renders dashboard component', () =>{
  const {getByText} = render(<Dashboard />);
  const dashboardElement = getByText(/ball/i);
  expect(dashboardElement).toBeInTheDocument();

});

//this is testing area for things located in dashboard


describe('balls and strikes reset to 0 when you hit 3 strikes or 4 balls', () =>{
  it('balls resets properly to 0', () =>{
    // const dash = require('./components/dashboard.js');

    const expected = 0;
    const ballcount = 3;
    const actual = addBall(ballcount);

    expect(actual).toBe(expected); //this should be true that 0 will be returned;
  });

  it('strikes resets properly to 0', () =>{

    const expected = 0;
    const strikecount = 2;
    const actual = addStrike(strikecount, 0);

    expect(actual[0]).toBe(expected);
  })



});
