import React from 'react';
import { render } from '@testing-library/react';
import App from './App.js';
import Display from './components/Display.js';
import Dashboard from './components/Dashboard.js';

// * App component
test('App renders without crashing', () => {
	render(<App />);
});

// * Display component
test('contains Balls and Strikes Count', () => {
	const containerDisplay = render(<Display />);
	containerDisplay.getByText(/balls/i);
	containerDisplay.getByText(/strikes/i);
});

// * Dashboard Component
test('contains foul and hit button', () => {
	const containerDash = render(<Dashboard />);
	containerDash.getByText(/hit/i);
	containerDash.getByText(/foul/i);
});
