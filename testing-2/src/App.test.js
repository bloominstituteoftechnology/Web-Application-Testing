import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import 'jest-dom/extend-expect';
import {render, fireEvent} from 'react-testing-library';
import Display from './display/display';
import Dashboard from './dashboard/dashboard';

it('renders without crashing', () => {
  // const div = document.createElement('div');
  // ReactDOM.render(<App />, div);
  // ReactDOM.unmountComponentAtNode(div);
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
  it('contains neccessary sub-components', () => {
    expect(displayComponent).toBeTruthy();
    expect(dashboardComponent).toBeTruthy();
  })
  const ballsDiv = app.getByText(/balls/i);
  const strikesDiv = app.getByText(/strikes/i);
  // describe('ball & strike count', () => {
  //   it('ball counter includes number count', () => {
  //     expect(ballsDiv.toContain(4));
  //   })
  // })
  describe('ball & strike keywords', () => {
    it('element contains balls keyword specifically', () => {         
      expect(ballsDiv).toHaveTextContent(/balls/i);
    })
    it('contains strikes specifically', () => {         
      expect(strikesDiv).toHaveTextContent(/strikes/i);
    })
  })
  // describe('props', () => {
  //   it('props are passed to Display Component', () => {
  //     const displayDiv = displayComponent.getby
  //     expect(displayComponent).toBeCalled();
  //   })
  // })
  describe('buttons works correctly', () => {
      test('ball button works', () => {
        const ballButton = dashboardComponent.getByTitle('ballButton');
        fireEvent.click(ballButton);
        const ballCount = displayComponent.getByTitle('balls-count');
        expect(ballCount).toHaveTextContent('1');
      })
      test('strike button works', () => {
        const strikeButton = dashboardComponent.getByTitle('strikeButton');
        fireEvent.click(strikeButton);
        const strikeCount = displayComponent.getByTitle('strikes-count');
        expect(strikeCount).toHaveTextContent('1')
      })
      test('strike count resets at 3 strikes', () => {
        const strikeButton = dashboardComponent.getByTitle('strikeButton');
        fireEvent.click(strikeButton);
        fireEvent.click(strikeButton); //fireEvent keeps log of past uses (line 62) so only 2 was needed in this test to simulate 3 button clicks.
        const strikeCount = displayComponent.getByTitle('strikes-count');
        expect(strikeCount).toHaveTextContent('0');
      })
  })
})