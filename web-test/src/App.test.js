import React from 'react';
import { render, fireEvent, cleanup } from '@testing-library/react';
import App from './App';
import {handleStrikes, handleBalls, handleFouls, handleHits, strikes} from './components/dashboard';
// test('renders learn react link', () => {
//   const { getByText } = render(<App />);
//   const linkElement = getByText(/learn react/i);
//   expect(linkElement).toBeInTheDocument();
// });
afterEach(cleanup);
it('matches snapshot', () =>{
  const { asFragment } = render(<App />);
  expect(asFragment()).toMatchSnapshot();
});

it('renders 4 buttons w/o crashing', ()=>{
  const { getByTestId } = render(<App/>);
  const buttonDiv = getByTestId('btnParent');
  expect(buttonDiv.children.length).toBe(4);
})
test('strikes are less than 3', ()=>{
  const { getByTestId } = render(<App/>);
  const displayStrikes = getByTestId('displayStrikes');
  const striker = getByTestId('striker');
  expect(displayStrikes.textContent).toBe('Strikes: 0')
   fireEvent.click(striker)
   expect(displayStrikes.textContent).toBe('Strikes: 1')
   fireEvent.click(striker)
   expect(displayStrikes.textContent).toBe('Strikes: 2')
   fireEvent.click(striker)
   expect(displayStrikes.textContent).toBe('Strikes: 0')
})
test('balls are less than 3', ()=>{
  const { getByTestId } = render(<App/>);
  const displayBalls = getByTestId('displayBalls');
  const baller = getByTestId('baller');
  expect(displayBalls.textContent).toBe('Balls: 0')
   fireEvent.click(baller)
   expect(displayBalls.textContent).toBe('Balls: 1')
   fireEvent.click(baller)
   expect(displayBalls.textContent).toBe('Balls: 2')
   fireEvent.click(baller)
   expect(displayBalls.textContent).toBe('Balls: 3')
   fireEvent.click(baller)
   expect(displayBalls.textContent).toBe('Balls: 0')
   fireEvent.click(baller)
})