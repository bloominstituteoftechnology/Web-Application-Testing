import React from 'react';
import { render } from '@testing-library/react';
import App, { addStrike } from './App';

test('render runs with out crashing', () => {
  render(<App />)
})

test('Expect function to add 1', () => {
    let actual;
    let expected;
    expect(actual).toBe(expected);
    expect(addStrike(0)).toBe(1)
})
