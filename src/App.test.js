import React from 'react';
import { render } from '@testing-library/react';
import App from './App';
import { addBall, addStrike, addFoul, addHit } from './components/Dashboard';

test('renders without crashing', () => {
  // Arrange, Act, Assert
  render(<App />);
});

test('addBall adds 1 ball, and resets when it reaches 4 balls', () => {
  expect(addBall(0)).toBe(1);
  expect(addBall(2)).toBe(3);
  expect(addBall(4)).toBe(0);
});

test('addStrike adds 1 strike, and resets when it reaches 3 strikes', () => {
  expect(addStrike(2)).toBe(3);
  expect(addStrike(0)).toBe(1);
  expect(addStrike(3)).toBe(0);
});

test('addFoul adds 1 foul', () => {
  expect(addFoul(0)).toBe(1);
  expect(addFoul(2)).toBe(3);
});

test('addHit adds 1 hit', () => {
  expect(addHit(0)).toBe(1);
  expect(addHit(1)).toBe(2);
});





