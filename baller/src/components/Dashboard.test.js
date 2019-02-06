import React from 'react';
import Dashboard from './Dashboard';
import Display from './Display';
import { render, fireEvent } from 'react-testing-library';
import 'jest-dom/extend-expect';

describe('The Dashboard Component', () => {
  test('renders without crashing', () => {
    render(<Dashboard />);
  });

  test('ball count add one when button clicked', () => {
    const dashboard = render(<Dashboard />);
    const display = render(<Display />);
    const ballButton = dashboard.getByTestId(/ballbutton/i)

    fireEvent.click(ballButton);

    const ballsCount = display.getByTestId(/ballsCount/i);
    expect(ballsCount).toHaveTextContent('1');
  })
})