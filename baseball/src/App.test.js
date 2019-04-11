import React from 'react';
import App from './App';
import 'jest-dom/extend-expect';
import {render} from 'react-testing-library';

it('renders without crashing', () => {
  render(<App/>)
  
});
