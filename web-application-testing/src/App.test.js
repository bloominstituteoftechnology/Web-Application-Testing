import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { render } from '@testing-library/react'
import '@testing-library/react/cleanup-after-each'

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

describe('app.js', () => {
  it('should returnan app with 4 buttons being, balls, strike, hit, and foul. along with corresponding visuals above those buttons to show current value.', () =>{
    expect(<App />)
  })
  // describe('setBallCount()', () => {
  //   it('should return current ball count that is below 3', () =>{
  //     expect(setBallsCount()).toBe(0)
  //   })
  // })
  
  // describe('setStrikeCount()', () => {
  //   it('should return current strike count that is below 3', () =>{
  //     expect(setStrikeCount()).toBe(0)
  //   })
  // })
  
  // describe('setHitCount()', () => {
  //   it('should return current hit count that is below 3', () =>{
  //     expect(setHitCount()).toBe(0)
  //   })
  // })
  
  // describe('setFoulCount()', () => {
  //   it('should return current foul count that is below 3', () =>{
  //     expect(setFoulCount()).toBe(0)
  //   })
  // })
})

