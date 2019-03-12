import React from 'react';
import { render, fireEvent } from 'react-testing-library';
import 'jest-dom/extend-expect';

import  AtBat from './AtBat';

describe('<AtBat />', () => {
    it('should show scoreboard and players', () => {
        const {getByText} = render(<AtBat />);
        expect(getByText(/players at bat/i)).toBeInTheDocument();
    });

    



})
