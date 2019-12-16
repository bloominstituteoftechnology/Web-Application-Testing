import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});

test('App displays count of balls', () => {
  const { getByText } = render(<App />);
  const ballsEl = getByText(/balls/i);
  expect(ballsEl).toBeInTheDocument();
  expect(ballsEl).toBeVisible();
})

test('App displays count of strikes', () => {
  const { getByText } = render(<App />);
  const strikesEl = getByText(/strikes/i);
  expect(strikesEl).toBeInTheDocument();
  expect(strikesEl).toBeVisible();
 
})


test('App contains strike button', () => {
  const { getByText } = render(<App />);
  const strikeButton = getByText(/^strike$/i);
  expect(strikeButton).toBeInTheDocument();
  expect(strikeButton).toBeVisible();
})



