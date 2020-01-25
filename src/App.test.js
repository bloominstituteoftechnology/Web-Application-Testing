import React from 'react';
import * as rtl from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import App from './App';
import { fireEvent } from '@testing-library/react';

afterEach(rtl.cleanup);

test('renders without crashing', () => {
  rtl.render(<App />)
})

describe('Strike Button', () => {
  test('increments Strike score', () => {
    const wrapper = rtl.render(<App />);
    const strikeBtn = wrapper.getByTestId('strike-btn');
    const strikeDisplay = wrapper.getByTestId('strike');
    fireEvent.click(strikeBtn);
    expect(strikeDisplay.innerHTML).toBe('Strikes: 1');
  })

  test(`Strike score doesn't exceed 2`, () => {
    const wrapper = rtl.render(<App />);
    const strikeBtn = wrapper.getByTestId('strike-btn');
    const strikeDisplay = wrapper.getByTestId('strike');
    fireEvent.click(strikeBtn);
    fireEvent.click(strikeBtn);
    fireEvent.click(strikeBtn);
    expect(strikeDisplay.innerHTML).toBe('Strikes: 0');
  })
})