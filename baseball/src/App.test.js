import React from 'react';
import { render } from '@testing-library/react';
import App, { addTouchdown } from './App';
import Buttons from "./components/Buttons";

// We don't want to test implementation details

test('renders without crashing', () => {
  render(<App />);
});

// unit testing isolated JavaScript functions
test('addStrike adds 1 strike', () => {
  // litte cleaner tests
  expect(Buttons.addStrike()).toBe(1);
  expect(Buttons.addStrike()).not.toBe(13);
});

// unit testing elements in a React app
test('Main header is found', () => {
  const { getByTestId } = render(<App />);

  // assert that the "lions" header is on the DOM
  getByTestId(/main-header/i);
});

test('random text is found', () => {
  const { getByText } = render(<App />);

  // assert that the "lions" header is on the DOM
  getByText(/random/i);
});