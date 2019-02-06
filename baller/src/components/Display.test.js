import React from 'react';
import Display from './Display';
import { render, cleanup } from 'react-testing-library';
import 'jest-dom/extend-expect';

afterEach(cleanup);

describe('The Display Component', () => {
  test('renders without crashing', () => {
    render(<Display />);
  });

  test('display balls title', () => {
    const { getByText} = render(<Display />);
    getByText(/balls count/i);
  })

  test('display balls count', () => {
    const display = render(<Display />);
    const ballsCount = display.getByTestId(/ballsCount/i);
    expect(ballsCount).toHaveTextContent('0');
  })

  test('display strikes title', () => {
    const { getByText} = render(<Display />);
    getByText(/strikes count/i);
  })

  test('display strikes count', () => {
    const display = render(<Display />);
    const strikes = display.getByTestId(/strikesCount/i);
    expect(strikes).toHaveTextContent('0');
  })
})