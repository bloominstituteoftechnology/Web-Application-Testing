import React from 'react';
import {render, fireEvent} from 'react-testing-library';

import Dashboard from './Dashboard';
import Display from './Display';

describe('Dashboard renders without crashing', () => {
    test('renders the Dashboard component', () => {
        render(<Dashboard />);
    })
    test('clicking the strikes button should update the display strikes <li>', () => {
        const component = render(<Display />);
        const strikes = component.getByTestId('strikes');
        console.log(strikes);
    })
})