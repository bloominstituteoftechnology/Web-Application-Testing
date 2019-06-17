import React from 'react';
import { render, fireEvent } from 'react-testing-library';
import 'react-testing-library/cleanup-after-each';

import App from './App';

describe('<App />', () => {
	it('renders without crashing', () => {
		render(<App />);
	});

	it('should display strikes and balls', () => {
		const { getByText } = render(<App />);

		getByText(/strikes/i);

		getByText(/balls/i);
	});

	it('should add strikes and balls', () => {
		const { getAllByText } = render(<App />);

		const button = getAllByText(/strike/i);
		fireEvent.click(button);

		const button1 = getAllByText(/ball/i);
		fireEvent.click(button1);
	});
});
