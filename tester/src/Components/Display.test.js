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
        const header = component.getByTestId('balls');
        expect(header).toHaveTextContent(/balls/i)
    });

    it('render display header', () => {
        const component = render(<Display />)
        const header2 = component.getByTestId('strikes');
        expect(header2).toHaveTextContent(/strikes/i)
    });

    it('render display header', () => {
        const component = render(<Display />)
        const fouls = component.getByTestId('fouls');
        expect(fouls).toHaveTextContent(/fouls/i)
    });

    it('render display header', () => {
        const component = render(<Display />)
        const hits = component.getByTestId('hits');
        expect(hits).toHaveTextContent(/hits/i)
    });

    it('render display header', () => {
        const component = render(<Display />)
        const outs = component.getByTestId('outs');
        expect(outs).toHaveTextContent(/outs/i)
    });
});