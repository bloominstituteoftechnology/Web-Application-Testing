import React from 'react';
import App from './App';
import { render, fireEvent,cleanup } from 'react-testing-library';
import 'jest-dom/extend-expect';

afterEach(cleanup);

describe('The App Component', () => {
  it('renders without crashing', () => {
    render(<App />);
  });

  test('ball count add one when button clicked', () => {
    const app = render(<App />);
    const ballButton = app.getByTestId(/ballbutton/i)

    fireEvent.click(ballButton);

    const ballsCount = app.getByTestId(/ballsCount/i);
    expect(ballsCount).toHaveTextContent('1');

    fireEvent.click(ballButton);

    expect(ballsCount).toHaveTextContent('2');
  })

  test('strike count add one when button clicked', () => {
    const app = render(<App />);
    const strikeButton = app.getByTestId(/strikebutton/i)

    fireEvent.click(strikeButton);

    const strikesCount = app.getByTestId(/strikescount/i);
    expect(strikesCount).toHaveTextContent('1');

    fireEvent.click(strikeButton);

    expect(strikesCount).toHaveTextContent('2');
  })
})