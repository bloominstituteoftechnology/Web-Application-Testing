import React from 'react';
import { render } from '@testing-library/react';
import App from './App';
import ScoreBoardBody from './components/ScoreboardBody'

test('renders learn react link', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/ScoreBoard!/i);
  expect(linkElement).toBeInTheDocument();
});

test('scoreboards are rendering properly', () => {
  const { getByTestId } = render(<ScoreBoardBody />);

  getByTestId(/Scoreboard/i);
});
