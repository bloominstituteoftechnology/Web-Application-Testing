import React from 'react';
import { render, fireEvent } from 'react-testing-library';
import 'jest-dom/extend-expect';
import Display from '../components/Display.js';

describe('<Display /> tests', () => {
    it('should display balls and strikes', () => {
        const { getByText } = render(<Display />);
        
        const balls = getByText(/Balls:/i);
        const strikes = getByText(/Strikes:/i);

        expect(balls).toBeInTheDocument();
        expect(strikes).toBeInTheDocument();
        
    });
});