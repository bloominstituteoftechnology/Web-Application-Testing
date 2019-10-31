import React from 'react';
import { render } from '@testing-library/react';
import App from './App';




test('it displays hit state component', () => {
  const { getByText } = render(<App />);
  getByText(/hits/i);
  });

  test('it returns all p tags', () => {
    const { findAllByText } = render(<App />);
    findAllByText("p-tags");
    });

    test('it displays hit state component', () => {
      const { getByText } = render(<App />);
      getByText(/fouls/i);
      });


test('renders without crashing', () => {
  render(<App />);
});
