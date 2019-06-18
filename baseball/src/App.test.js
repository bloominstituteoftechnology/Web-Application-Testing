import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import {render, fireEvent} from '@testing-library/react';
import '@testing-library/react/cleanup-after-each'


it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

/****************************************************************************/
/*                            Strike Button                                 */
/****************************************************************************/
describe('strike button', () => {
  it('should check successive strike count increase: 0 => 1 => 2 => 0', () => {
    const {getByTestId, getByText} = render(<App />);

    const button = getByText(/^strike$/i);
    fireEvent.click(button);
    expect(getByTestId('strikes').textContent).toBe('1');
    fireEvent.click(button);
    expect(getByTestId('strikes').textContent).toBe('2');
    fireEvent.click(button);
    expect(getByTestId('strikes').textContent).toBe('0');
  })
})

/****************************************************************************/
/*                              Ball Button                                 */
/****************************************************************************/
describe('ball button', () => {
  it('should check successive ball count increase: 0 => 1 => 2 => 3 => 0', () => {
    const {getByTestId, getByText} = render(<App />);

    const button = getByText(/^ball$/i);

    fireEvent.click(button);
    expect(getByTestId('balls').textContent).toBe('1');
    fireEvent.click(button);
    expect(getByTestId('balls').textContent).toBe('2');
    fireEvent.click(button);
    expect(getByTestId('balls').textContent).toBe('3');
    fireEvent.click(button);
    expect(getByTestId('balls').textContent).toBe('0');
  })
})

/****************************************************************************/
/*                               Hit Button                                 */
/****************************************************************************/

describe('hit button', () => {
  it('should change both ball and strike count to 0', () => {
    const {getByTestId, getByText} = render(<App />);

    const hit = getByText(/^hit$/i);
    const ball = getByText(/^ball$/i)
    const strike = getByText(/^strike$/i)


    //from ball: 0 and strikes: 0
    fireEvent.click(hit);
    expect(getByTestId('balls').textContent).toBe('0');
    expect(getByTestId('strikes').textContent).toBe('0');


    //from ball: 1 and strikes: 1
    fireEvent.click(ball);
    fireEvent.click(strike);

    fireEvent.click(hit);
    expect(getByTestId('balls').textContent).toBe('0');
    expect(getByTestId('strikes').textContent).toBe('0');

    //from ball: 3 and strikes: 2
    fireEvent.click(ball);
    fireEvent.click(ball);
    fireEvent.click(ball);
    fireEvent.click(strike);
    fireEvent.click(strike);

    fireEvent.click(hit);
    expect(getByTestId('balls').textContent).toBe('0');
    expect(getByTestId('strikes').textContent).toBe('0');


  })
})

/****************************************************************************/
/*                              Foul Button                                 */
/****************************************************************************/
describe('foul button', () => {
  it('should change strike count from 0 => 1 => 2 => 2', () => {
    const {getByTestId, getByText} = render(<App />);

    const button = getByText(/^foul$/i);
    const strike = getByText(/^strike$/i)

    //from strike: 0
    fireEvent.click(button);
    expect(getByTestId('strikes').textContent).toBe('1');

    //from strike: 1
    fireEvent.click(strike);

    fireEvent.click(button);
    expect(getByTestId('strikes').textContent).toBe('2');

    //from strike: 2
    fireEvent.click(strike);
    fireEvent.click(strike);

    fireEvent.click(button);
    expect(getByTestId('strikes').textContent).toBe('2');


  })
})
