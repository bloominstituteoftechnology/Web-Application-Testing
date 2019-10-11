import React from 'react'
import * as rtl from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import App from '../components/Dashboard';

afterEach(rtl.cleanup);

test('Dashboard is rendered', () => {
    const dashboard = rtl.render(<Dashboard />);
    expect(dashboard).toBeDefined(null);
})

test('Strikes button exists');
test('Balls button exists');
test('Fouls button exists');
test('Hits button exists');

