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
