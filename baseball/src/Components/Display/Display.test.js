import React from 'react';
import Display from './Display';
import { render } from 'react-testing-library'
import 'jest-dom/extend-expect'



describe('Display Test', () => {
    it('renders without crashing', () => {
        const div = document.createElement('div');
        render(<Display />, div);

    });

    it('displays the ball count', () => {
        const component = render(<Display />)
        const score = component.getByTestId(/balls/i)
        expect(score).toHaveTextContent('0')
    })

})

