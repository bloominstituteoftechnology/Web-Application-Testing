import React from 'react';
import { render } from 'react-testing-library';
import 'jest-dom/extend-expect';
import App from './App';
import Display from './Display';
import Dashboard from './Dashboard';

describe('The APP', () => {
  it('renders without crashing', () => {
    render(<App />);
  });

  it ('renders Display', () => {
    render(<Display />);
  });

  it ('renders Dashboard', () => {
    render(<Dashboard />);
  });
});


