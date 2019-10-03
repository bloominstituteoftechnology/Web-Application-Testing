import React from 'react';
import { render, getByTestId } from '@testing-library/react';

import App from './App';

it('renders without crashing', () => {
  render(<App />);
});

test('Player score is found', () => {
  const { getByTestId } = render(<App />);

  getByTestId('players__score');
})


