import React from 'react';
import { render } from 'react-testing-library';
import 'jest-dom/extend-expect';
import Display from './display';
import Dashboard from './dashboard';

describe('The Display Component', () => {
    test('renders display.js component', () => {
        render(<Display />);
    });

    test('display the count of balls', () => {
        const component = render(<Display/>);
        const count = component.getByTestId('count');
        expect(count).toHaveTextContent('3');
    });

    test('display the strike number', () => {
        const component = render(<Display/>);
        const strike = component.getByTestId('strike');
        expect(strike).toHaveTextContent('2');
    })
})

describe('The Dashboard Component', () => {
    test('renders dashboard.js component', () => {
        render(<Dashboard/>)
    })
})