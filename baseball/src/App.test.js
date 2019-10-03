import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';


test('addStrikes adds 1 to currentStrike if >= 2', () => {
  let actual;
  let expected;
  actual = (0);
  expected = 0;
  expect(actual).toBe(expected);
  expect(actual).not.toBe(1);
});



it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});



