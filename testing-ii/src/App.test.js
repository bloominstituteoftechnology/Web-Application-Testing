import React from 'react';
import { render } from 'react-testing-library';
import 'jest-dom/extend-expect';
import App from './App';

describe('The App Component', () => {

  it('renders without crashing', () => {
    render(<App />)
  });

})

// Does it render?
// Does it render correctly?
// Are sub-components rendered, and how many of them?
// Are props handled correctly.
// Is state handled correctly.
// Does it handle events correctly?

