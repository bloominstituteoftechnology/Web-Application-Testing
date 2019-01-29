import React from 'react';
import { render, fireEvent } from 'react-testing-library';
import 'jest-dom/extend-expect';
import Dashboard from '../components/Dashboard.js';

describe('<Dashboard /> tests', () => {
    it('should display one button each saying Strike, Ball, Foul, Hit', () => {
        const { getByTestId } = render(<Dashboard />);

        const strikeBtn = getByTestId('strike-btn');
        const ballsBtn = getByTestId('ball-btn');
        const foulBtn = getByTestId('foul-btn');
        const hitBtn = getByTestId('hit-btn');


        expect(strikeBtn).toHaveTextContent(/strike/i);
        expect(ballsBtn).toHaveTextContent(/ball/i);
        expect(foulBtn).toHaveTextContent(/foul/i);
        expect(hitBtn).toHaveTextContent(/hit/i);
    });
});
