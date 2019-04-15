import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import 'jest-dom/extend-expect';
import {render, fireEvent} from 'react-testing-library';
import Display from './components/Display';
import Dashboard from './components/Dashboard';



it('renders without crashing', () => {
  render(<App />);
});

describe('The App Component', () => {
  const app = render(<App />);
  const displayComponent = render(<Display />);
  const dashboardComponent = render(<Dashboard />);

  it('it exists', () => {
    expect(app).toBeTruthy();
  })
  it('contains content', () => {
    expect.anything();
  })
  it('contains needed sub-components', () => {
    expect(displayComponent).toBeTruthy();
    expect(dashboardComponent).toBeTruthy();
  })
  const ballsDiv = app.getByText(/balls/i);
  const strikesDiv = app.getByText(/strikes/i);

  describe('ball & strike keywords', () => {
    it('element contains balls keyword specifically', () => {
      expect(ballsDiv).toHaveTextContent(/balls/i);
    })
    it('contains strikes specifically', () => {
      expect(strikesDiv).toHaveTextContent(/strikes/i);
    })
  })

  describe('if the buttons work correctly', () => {
    test('ball button works successfully', () => {
      const ballButton = dashboardComponent.getByTitle('ballButton');
        fireEvent.click(ballButton);
        const ballCount = displayComponent.getByTitle('balls-count');
        expect(ballCount).toHaveTextContent('1');
    })
    test('if the strike button works', () => {
      const strikeButton = dashboardComponent.getByTitle('strikeButton');
      fireEvent.click(strikeButton);
      const strikeCount = displayComponent.getByTitle('strikes-count');
      expect(strikeCount).toHaveTextContent('1')
    })

    test('that strikes successfully reset when they reach 3', () => {
      const strikeButton = dashboardComponent.getByTitle('strikeButton');
        fireEvent.click(strikeButton);
        fireEvent.click(strikeButton); //fireEvent keeps log of past uses (line 62) so only 2 was needed in this test to simulate 3 button clicks.
        const strikeCount = displayComponent.getByTitle('strikes-count');
        expect(strikeCount).toHaveTextContent('0');
    })
  })
})
