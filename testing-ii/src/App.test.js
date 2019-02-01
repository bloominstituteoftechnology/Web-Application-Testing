import React from 'react';
import { render } from 'react-testing-library';
import 'jest-dom/extend-expect';
import App from './App';

describe('The App Component', () => {

  it('renders without crashing', () => {
    render(<App />)
  });

})

