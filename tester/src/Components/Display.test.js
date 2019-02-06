import React from 'react';
import {cleanup, render,} from "react-testing-library";
import "jest-dom/extend-expect";
import Display from "./Display";
afterEach(cleanup);

describe('The Display Component', () => {
    it('renders the correct count of balls and strikes', () => {
        render(<Display />);
    });
    
    it('render display header', () => {
        const component = render(<Display />)
        const header = component.getByTestId('headerH3');
        expect(header).toHaveTextContent(/balls/i)
    });

    it('render display header', () => {
        const component = render(<Display />)
        const header2 = component.getByTestId('headerH32');
        expect(header2).toHaveTextContent(/strikes/i)
    });
});