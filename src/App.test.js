import React from 'react';
import * as rtl from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import App from './App';

afterEach(rtl.cleanup);

describe('App', () => {
  it('mounts to a kind of simulated DOM', () => {
    const simulatedDOM = rtl.render(<App />);
    const h3 = simulatedDOM.queryByText(/dashboard/i);
    expect(h3).toBeInTheDocument();
    console.log(h3.textContent);
  })
})
