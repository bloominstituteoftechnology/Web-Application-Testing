import React from 'react';
import Display from './Display';
import { render } from 'react-testing-library';
import 'jest-dom/extend-expect';

describe('The Display Component', () => {
  test('renders without crashing', () => {
    render(<Display />);
  });

  test('display balls title', () => {
    const display = render(<Display />);
    const ballsCount = display.getByTestId(/balls/i);
    expect(ballsCount).toHaveTextContent(/balls count/i);
  })

  test('display balls count', () => {
    const display = render(<Display />);
    const ballsCount = display.getByTestId(/ballsCount/i);
    expect(ballsCount).toHaveTextContent('0');
  })

  test('display strikes title', () => {
    const display = render(<Display />);
    const strikesCount = display.getByTestId('strikes');
    expect(strikesCount).toHaveTextContent(/strikes count/i);
  })

  test('display strikes count', () => {
    const display = render(<Display />);
    const strikes = display.getByTestId(/strikesCount/i);
    expect(strikes).toHaveTextContent('0');
  })
})