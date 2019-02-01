import React from 'react';
// import ReactDOM from 'react-dom';
import Display from './Display';
import { render } from 'react-testing-library'
import 'jest-dom/extend-expect'

it('renders without crashing', () => {
    const div = document.createElement('div');
    render(<Display />, div);
    // ReactDOM.unmountComponentAtNode(div);
});
