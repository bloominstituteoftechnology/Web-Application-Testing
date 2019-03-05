import React from 'react';
import { render, fireEvent } from 'react-testing-library';
import 'jest-dom/extend-expect';

import Display from './Display';

describe('<Display />', () => {
    it('renders the display info name', () => {

        const { getByTestId, debug } = render(<Display strikes={0} balls={2} />);


        const strikes = getByTestId('Strikes');
        const balls = getByTestId('Balls');


        expect(strikes).toHaveTextContent('0 strikes');
        expect(balls).toHaveTextContent('2 balls');
    });

});