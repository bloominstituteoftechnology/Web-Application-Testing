import React from 'react';
import { render } from '@testing-library/react';
import App from './App';
import { addPitch } from './components/Dashboard/Dashboard';

test('renders learn react link', () => {
  const { getByText } = render(<App />);
  const pageTitle = getByText(/at bat dashboard/i);
  expect(pageTitle).toBeInTheDocument();
});

test("pitch add 1", () => {
  // ARRANGE
  const currentCount = 1;
  const expected = 2;

  // ACT
  const actual = addPitch(currentCount);

  // ASSERT
  expect(actual).toBe(expected);
});