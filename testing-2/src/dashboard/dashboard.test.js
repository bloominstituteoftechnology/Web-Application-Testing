import React from 'react';
import {render, fireEvent} from 'react-testing-library';
import 'jest-dom/extend-expect';
import Dashboard from './dashboard.js';
import Display from '../display/display.js';

import 'jest-extended';

it('renders without crashing', () => {
    render(<Dashboard />)
  });

describe('dashboard component test', () => {
    const dashboardComponent = render(<Dashboard />);
    const ballButton = dashboardComponent.getByTitle('ballButton');

    const displayComponent = render(<Display />);

    it('component exists', () => {
        expect(dashboardComponent).toBeTruthy();
    })
    // test('ball button works', () => {
    //     fireEvent.click(ballButton);
    //     const ballCount = displayComponent.getByTitle('balls-count');
    //     expect(ballCount).toHaveTextContent('1');
    // })
})