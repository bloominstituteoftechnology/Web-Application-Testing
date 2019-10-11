import React from 'react'
import * as rtl from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import App from '../components/App';

afterEach(rtl.cleanup);

test('App is rendered', () => {
    const app = rtl.render(<App />);
    expect(app).toBeDefined(null);
})