import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {sum} from './app';
import Display from './Components/Display'
import Dashboard from './Components/Dashboard'

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});


test('it returns the sum of two numbers' , () => {
  expect(sum(3,2)).toBe(5);
})


test('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Display />, div);
  ReactDOM.unmountComponentAtNode(div);
});

test('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Dashboard />, div);
  ReactDOM.unmountComponentAtNode(div);
});

test('it shows the title', () => {
  const { getByText } = render(<App />, h1)
  getByText(/Baseball Tracker/);
})