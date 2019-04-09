import React from 'react';
import { render, fireEvent, cleanup } from 'react-testing-library';
import 'jest-dom/extend-expect';

import App from './App';

afterEach(cleanup);

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

describe('Fouls', () => {
	it('Increases strike count by 1', () => {
		const { getByText } = render(<App />);
		const button = getByText(/foul/i);
		fireEvent.click(button);
		getByText(/strikes: 1/i);
	});

	it('Does not increase if there are 2 strikes', () => {
		const { getByText } = render(<App />);
		const foulBtn = getByText(/foul/i);
		const strikeBtn = getByText(/strike/i);
		fireEvent.click(strikeBtn);
		fireEvent.click(strikeBtn);
		fireEvent.click(foulBtn);
		getByText('Strikes: 2');
	});
});

describe('Hits', () => {
	it('Resets balls and strikes to 0', () => {
		const { getByText } = render(<App />);
		const hitBtn = getByText('Hit');
		const strikeBtn = getByText('Strike');
		const ballBtn = getByText('Ball');
		fireEvent.click(strikeBtn);
		fireEvent.click(ballBtn);
		fireEvent.click(hitBtn);
		getByText('Strikes: 0');
	});
});
