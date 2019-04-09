import React from 'react';
import { render } from 'react-testing-library';
import 'jest-dom/extend-expect';
import { shallow } from 'enzyme';

import Display from './Display';

describe('The Display Component', () => {

  test('renders the display component', () => {
    render(<Display />);
  })

  it('shallow rendering', () => {
    shallow(<Display />);
  })

  it('displays strikes and balls', () => {
    const display = render(<Display />);
    const strikes = display.getByTestId('strikes');
    const balls = display.getByTestId('balls');

    expect(strikes).toHaveTextContent(/strikes:/i);
    expect(balls).toHaveTextContent(/balls:/i);
  })
})

// Does it render?
// Does it render correctly?
// Are sub-components rendered, and how many of them?
// Are props handled correctly.
// Is state handled correctly.
// Does it handle events correctly?