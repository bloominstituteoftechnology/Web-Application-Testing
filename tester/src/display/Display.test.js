import React from 'react';
import {cleanup, render,} from "react-testing-library";
import "jest-dom/extend-expect";
import Display from "./Display";
afterEach(cleanup);

describe('The Display Component', () => {
    it('renders the correct count of balls and strikes', () => {
        const {getByText} = render(<Display balls="2" strikes="1" />);

        getByText(/2 balls/i);
        getByText(/1 strikes/i);
    });
    
    // it('render display header', () => {

    // });
});