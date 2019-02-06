import React from 'react';
import App from './App';
import { render } from 'react-testing-library';
import 'jest-dom/extend-expect';

describe('The App Component', () => {
  it('renders without crashing', () => {
    render(<App />);
  });
})