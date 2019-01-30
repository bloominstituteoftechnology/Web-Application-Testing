import React from 'react';
import { render, fireEvent } from 'react-testing-library';
import 'jest-dom/extend-expect';

import DashBoard from './Dashboard';

describe('<Display />', () => {
    it('renders the display info name', () => {
        // [ { id: 1, name: 'Pedro Martinez' }]
        const { getByTestId, debug } = render(<DashBoard strikes={0} balls={1} />);

        // debug();

        const strikes = getByTestId('Strikes');
        const balls = getByTestId('Balls');

        // expect(title.innerHTML).toBe('1')
        expect(strikes).toHaveTextContent('0 Strikes');
        expect(balls).toHaveTextContent('1 Balls')
    });

    describe('Select button', () => {
        it('should add a strike', () => {
            let strikes = 2;
            let call = function (func) {
                strikes += 1;

            }
            const { getByText, getByTestId } = render(<DashBoard strikes={strikes} call={call} />);


            const button = getByText('Strike');

            fireEvent.click(button);
            console.log(strikes);
            const selected = getByTestId('Strikes');

            expect(selected).toHaveTextContent('0 Strikes');
        });
    });
});