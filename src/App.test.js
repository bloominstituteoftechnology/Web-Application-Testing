import React from 'react';
import App from './App';
import { render, fireEvent, getByTestId } from '@testing-library/react'


test('renders without crashing', () => {
  render(<App />);
});

test('displays four buttons', () => {
  const container = render(<App />)
  container.getAllByRole('button')
});

test('has header for Balls', () => {
  const container = render(<App />)
  container.getByText('Balls')
})

test('has header for Strikes', () => {
  const container = render(<App />)
  container.getByText('Strikes')
})


test('button events fire', () => {
  const container = render(<App />)
  fireEvent.click(container.getByText('Strike'))
  fireEvent.click(container.getByText('Hit'))
  fireEvent.click(container.getByText('Foul'))
  fireEvent.click(container.getByText('Balls'))
})

test("properly increments the strike and ball counter", () => {
  const { getByText, getByTestId } = render(<App />);
  const strikeCount = getByTestId("strikeCount");
  const ballCount = getByTestId("ballCount");
  const strikeButton = getByText("Strike");
  const ballButton = getByText("Ball");
  fireEvent.click(strikeButton);
  fireEvent.click(ballButton);
  expect(strikeCount.textContent).toEqual("1");
  expect(ballCount.textContent).toEqual("1");
});

test("hit button properly resets all counters to 0", () => {
  const { getByText, getByTestId } = render(<App />);
  const strikeCount = getByTestId("strikeCount");
  const ballCount = getByTestId("ballCount");
  const hitButton = getByText("Hit");
  fireEvent.click(hitButton);
  expect(strikeCount.textContent).toEqual("0");
  expect(ballCount.textContent).toEqual("0");
});









