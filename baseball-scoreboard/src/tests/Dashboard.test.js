import React from 'react'
import * as rtl from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import Dashboard from '../components/Dashboard';

afterEach(rtl.cleanup);

test('Dashboard is rendered', () => {
    const dashboard = rtl.render(<Dashboard />);
    expect(dashboard).toBeDefined(null);
})

test('Strikes button exists', () => {
    const strikeDash = rtl.render(<Dashboard />);
    expect (dashboard).toBeDefined(null);


test('Balls button exists', () => {
    const ballDash = rtl.render(<Dashboard />);
    expect (dashboard).toBeDefined(null);
});

test('Fouls button exists', () => {
    const foulDash = rtl.render(<Dashboard />);
    expect (dashboard).toBeDefined(null);
});

test('Hits button exists', () => {
    const hitDash = rtl.render(Dashboard />);
    expect (dashboard).toBeDefined(null);
});



