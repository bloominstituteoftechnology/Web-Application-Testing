import React from 'react';
import * as rtl from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import App from './App';
//does strikes = 0 on render?
//if handleStrikes runs does it display 1?
//if strikes = 3 and handleStrikes runst does it display 0?
//does balls = 0 on render?
//if handleBalls runs does it display 1?
//if balls = 4 and handleBalls runst does it display 0?
//does fouls = 0 on render?
//if handlefouls runs does it display 1 strike 1 foul?
//if fouls = 3 and handlefouls runst does it display 4 fouls and 2 strikes?
//if handleHits runs does it reset balls, strikes, and fouls?

afterEach(rtl.cleanup);

it('renders without crashing', () => {
  const wrapper = rtl.render(<App />)
});

it('renders Buttons', () => {
  const wrapper = rtl.render(<App />);
  wrapper.getByText(/^Ball$/i)
  wrapper.getByText(/^Strike$/i)
  wrapper.getByText(/^Foul$/i)
  wrapper.getByText(/^Hit$/i)
});

it('renders values', () => {
  const wrapper = rtl.render(<App />);
  wrapper.getByDisplayValue('0');
})
