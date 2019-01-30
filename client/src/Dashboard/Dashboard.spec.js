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


});