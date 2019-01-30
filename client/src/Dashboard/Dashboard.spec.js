import React from 'react';
import { render, fireEvent, waitForElement } from 'react-testing-library';
import 'jest-dom/extend-expect';

import DashBoard from './Dashboard';

describe('<Dashboard />', () => {
    it('renders the Dashboard info name', () => {

        const { getByTestId, debug } = render(<DashBoard strikes={0} balls={1} />);


        const strikes = getByTestId('Strikes');
        const balls = getByTestId('Balls');

        expect(strikes).toHaveTextContent('0 Strikes');
        expect(balls).toHaveTextContent('1 Balls')
    });

    describe('Select button', () => {
        it('should add a strike', async () => {
            let strikes = 0;
            function call(func) {
                console.log(func)
                strikes += 1;

            }
            const { getByText, getByTestId } = render(<DashBoard strikes={strikes} call={call} />);


            const button = getByText('Strike');

            fireEvent.click(button);
            console.log(strikes);
            const selected = await waitForElement(() =>
                getByTestId('Strikes'),
            )

            expect(selected).toHaveTextContent('1 Strikes');
        });
    });
});