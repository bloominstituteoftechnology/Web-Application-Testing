import React from 'react';

import {render} from 'react-testing-library';
import'jest-dom/extend-expect';

import Dashboard from '../components/Dashboard';

it('renders without crashing', () => {
  
  render(<Dashboard />);
 
});