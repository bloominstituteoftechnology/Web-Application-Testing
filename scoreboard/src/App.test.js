import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);

});

test('renders scores', ()=> {
  const {getByTestId} = render(<App />);
  getByTestId(/ballValue/i);
  getByTestId(/strikeValue/i);
  
})
