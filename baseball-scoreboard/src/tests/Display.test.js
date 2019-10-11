import React from 'react'
import * as rtl from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import Display from '../components/Display';

afterEach(rtl.cleanup);

test ('Display is rendered', () => {
    const display = rtl.render(<Display />);
    expect(display).toBeDefined(null);
})

