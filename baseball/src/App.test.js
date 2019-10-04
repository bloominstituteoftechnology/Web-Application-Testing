// import React from 'react';
// import ReactDOM from 'react-dom';
// import App from './App';
import { addStrikes, addBalls } from "./Dashboard";

test('addStrikes adds 1 to currentStrike if >= 2', () => {
  let actual;
  let expected;
  actual = addStrikes(0);
  expected = 1;
  expect(actual).toBe(expected);
});

test('addStrikes adds 1 to currentStrike if >= 2', () => {
  let actual;
  let expected;
  actual = addBalls(0);
  expected = 1;
  expect(actual).toBe(expected);
});



// it('renders without crashing', () => {
//   const div = document.createElement('div');
//   ReactDOM.render(<App />, div);
//   ReactDOM.unmountComponentAtNode(div);
// });



