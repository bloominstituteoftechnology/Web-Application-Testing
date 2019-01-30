import React from 'react';
import { render, fireEvent } from 'react-testing-library';
import 'jest-dom/extend-expect';

import Display from './Display';

describe('<Display />', () => {
    it('renders the display info name', () => {
        // [ { id: 1, name: 'Pedro Martinez' }]
        const { getByTestId, debug } = render(<Display strikes={0} balls={1} />);

        // debug();

        const strikes = getByTestId('Strikes');
        const balls = getByTestId('Balls');

        // expect(title.innerHTML).toBe('1')
        expect(strikes).toHaveTextContent('0 strikes');
        expect(balls).toHaveTextContent('1 balls')
    });

    // describe('Select button', () => {
    //     it('should select the player', () => {
    //         const { getByText, getByTestId } = render(<Display strikes={0}/>);

    //         const selected = getByTestId('Strikes');
    //         const button = getByText(/strike/i);

    //         fireEvent.click(button);

    //         expect(selected).toHaveTextContent(/1 strikes/i);
    //     });
    // });
});