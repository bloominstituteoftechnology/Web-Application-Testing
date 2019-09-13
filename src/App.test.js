import React from 'react';
import { render } from '@testing-library/react';
import App from './App';
import { addBall, addStrike, addFoul, addHit } from './components/Dashboard';

test('renders without crashing', () => {
  // Arrange, Act, Assert
  render(<App />);
});



