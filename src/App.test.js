import React from 'react';
import { render } from '@testing-library/react';
import App from './App';
import { addBall, addStrike, addFoul, addHit } from './components/Dashboard';

test('renders without crashing', () => {
  // Arrange, Act, Assert
  render(<App />);
});

test('addBall adds 1 ball', () => {
  expect(addBall(0)).toBe(1);
  expect(addBall(2)).toBe(3);
});

test('addStrike adds 1 strike', () => {
  expect(addStrike(2)).toBe(3);
  expect(addStrike(0)).toBe(1);
});

test('addFoul adds 1 foul', () => {
  expect(addFoul(0)).toBe(1);
  expect(addFoul(2)).toBe(3);
});

test('addHit adds 1 hit', () => {
  expect(addHit(0)).toBe(1);
  expect(addHit(1)).toBe(2);
});





