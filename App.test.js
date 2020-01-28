import React from 'react';
import { render } from '@testing-library/react';
import { addStrike, addBall } from './App';
import App from './App';

test('renders learn react link', () => {
  const { getByText } = render(<App />);
  const string = getByText(/Strikes/i);
  expect(string).toBeInTheDocument();
});

test('handleStrike (one)', () => {
  let strikes = 1;
  let expected = 2;

  let actual = addStrike(strikes);

  expect(actual).toBe(expected);

});

test('handleStrike (two)', () => {
  let strikes = 2;
  let expected = 3;

  let actual = addStrike(strikes);

  expect(actual).toBe(expected);

});

test('handleBall (two)', () => {
  let balls = 3;
  let expected = 4;

  let actual = addBall(balls);

  expect(actual).toBe(expected);

});