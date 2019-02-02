import React from 'react';
import { render, fireEvent } from 'react-testing-library';
import 'jest-dom/extend-expect';
import Display from '../components/Display';
import Dashboard from '../components/Dashboard';

describe('<Display /> tests', () => {
    it('should display balls and strikes', () => {
        const { getByText } = render(<Display />);
        
        const balls = getByText(/Balls:/i);
        const strikes = getByText(/Strikes:/i);

        expect(balls).toBeInTheDocument();
        expect(strikes).toBeInTheDocument();
        
    });

    it('should display balls and strikes set to 0 when press the hit button', () => {
        const { getByText, getByTestId } = render(<Display />);

        const balls = getByText(/Balls:/i);
        const strikes = getByText(/Strikes:/i);
        const hitBtn = getByTestId('hit-btn');

        fireEvent.click(hitBtn);

        expect(balls).toHaveTextContent(/0/i);
        expect(strikes).toHaveTextContent(/0/i);
    })
});