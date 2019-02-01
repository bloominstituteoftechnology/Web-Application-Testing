import React from 'react';
import { render } from 'react-testing-library';
import 'jest-dom/extend-expect';
import Dashboard from './Dashboard';

describe('The Dashboard Component', () => {

  test('renders the dashboard component', () => {
    render(<Dashboard />);
  })

})