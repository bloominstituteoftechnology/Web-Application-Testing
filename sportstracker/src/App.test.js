import React from 'react';
import { render, fireEvent } from 'react-testing-library';
import 'jest-dom/extend-expect';
import App from './App';
import Display from './Display';
import Dashboard from './Dashboard';

describe('The APP', () => {
  it('renders without crashing', () => {
    render(<App />);
  });

  it ('renders Display', () => {
    render(<Display />);
  });

  it ('renders Dashboard', () => {
    render(<Dashboard />);
  });

  it ('displays numbers for balls and strickes', () => {
    const component = render(<Display />);
    const balls = component.getByTestId('balls');
    const strikes = component.getByTestId('strikes');
    expect(balls).toHaveTextContent(/[0-3]/);
    expect(strikes).toHaveTextContent(/[0-2]/)
  });

  it ('increments balls', () => {
    const display = render(<Display />);
    const dashboard = render(<Dashboard />);
    const balls = display.getByTestId('balls');
    const strikes = display.getByTestId('strikes');
    const ballButton = dashboard.getByTestId('ballButton');
    fireEvent.click(ballButton);
    expect(balls).toHaveTextContent(1);
    fireEvent.click(ballButton);
    expect(balls).toHaveTextContent(2);
    fireEvent.click(ballButton);
    expect(balls).toHaveTextContent(3)
    fireEvent.click(ballButton);
    expect(balls).toHaveTextContent(0);
    expect(strikes).toHaveTextContent(0);
  });

  it ('increments strikes', () => {
    const display = render(<Display />);
    const dashboard = render(<Dashboard />);
    const balls = display.getByTestId('balls');
    const strikes = display.getByTestId('strikes');
    const strikeButton = dashboard.getByTestId('strikeButton');
    fireEvent.click(strikeButton);
    expect(strikes).toHaveTextContent(1);
    fireEvent.click(strikeButton);
    expect(strikes).toHaveTextContent(2);
    fireEvent.click(strikeButton);
    expect(balls).toHaveTextContent(0);
    expect(strikes).toHaveTextContent(0);
  });

  it ('increments strikes with foul', () => {
    const display = render(<Display />);
    const dashboard = render(<Dashboard />);
    const balls = display.getByTestId('balls');
    const strikes = display.getByTestId('strikes');
    const foulButton = dashboard.getByTestId('foulButton');
    fireEvent.click(foulButton);
    expect(strikes).toHaveTextContent(1);
    fireEvent.click(foulButton);
    expect(strikes).toHaveTextContent(2);
    fireEvent.click(foulButton);
    expect(strikes).toHaveTextContent(2);
  });

  it ('hit button resets', () => {
    const display = render(<Display />);
    const dashboard = render(<Dashboard />);
    const balls = display.getByTestId('balls');
    const strikes = display.getByTestId('strikes');
    const hitButton = dashboard.getByTestId('hitButton');
    fireEvent.click(hitButton);
    expect(balls).toHaveTextContent(0);
    expect(strikes).toHaveTextContent(0);
  });
});


