import React from 'react';
import { render } from '@testing-library/react';
import App from './App';



// test('renders learn react link', () => {
//   const { getByText } = render(<App />);
//   const linkElement = getByText(/learn react/i);
//   expect(linkElement).toBeInTheDocument();
// });

test('App renders without crashing', () => {
  render(<App />)
})

test('ball title rendered', () => {
  const {getAllByText} = render(<App />);

  const getBalls = getAllByText(/ball/i)
  expect(getBalls).toHaveLength(2);
})

test('at is rendered only once', () => {
  const {getByText} = render(<App />);
  const getAtMe = getByText(/random/i)
  expect(getAtMe).toBeInTheDocument();
})