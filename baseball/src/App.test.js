import React from 'react';
import { render, fireEvent } from 'react-testing-library';
import 'jest-dom/extend-expect';

import App from './App';

describe('Strikes', () => {
	it('Increases strike count', () => {
		const { getByText } = render(<App />);
		const button = getByText(/strike/i);

		fireEvent.click(button);
		getByText(/strikes: 1/i);
	});

	it('Strikes do not go above 2', () => {
		const { getByText } = render(<App />);
		const button = getByText(/strike/i);
		fireEvent.click(button);
		fireEvent.click(button);
		fireEvent.click(button);
		getByText(/strikes: 0/i);
		getByText(/outs: 1/i);
	});
});

describe('Balls', () => {
	it('Increases ball count', () => {
		const { getByText } = render(<App />);
		const button = getByText(/ball/i);

		fireEvent.click(button);
		getByText(/balls: 1/i);
	});

	it('balls do not go above 3', () => {
		const { getByText } = render(<App />);
		const button = getByText(/ball/i);
		fireEvent.click(button);
		fireEvent.click(button);
		fireEvent.click(button);
		fireEvent.click(button);
		getByText(/balls: 0/i);
		getByText(/runs: 1/i);
	});
});
