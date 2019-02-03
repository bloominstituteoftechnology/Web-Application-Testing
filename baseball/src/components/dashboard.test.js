import React from 'react';
import 'jest-dom/extend-expect';
import {render, fireEvent} from 'react-testing-library';
import Dashboard from './dashboard.js'

it('renders without crashing', () => {
    render(<Dashboard/>)
    })
  
describe('It Records A Strikeout With 3 Strikes', () =>{
        test('resets to zero strikes after 3', () => {
        const component = render(<Dashboard/>);
        const strike = component.getByText('Strike');
        const strikeDisplay = component.getByTestId('strikes');
        fireEvent.click(strike);
        fireEvent.click(strike);
        fireEvent.click(strike);
        expect(strikeDisplay).toHaveTextContent('0');
    }) 
        test('it records an out after a strikeout', () => {
            const component = render(<Dashboard/>);
            const strike = component.getByText('Strike');
            const outDisplay = component.getByTestId('outs');
            fireEvent.click(strike);
            fireEvent.click(strike);
            fireEvent.click(strike);
            expect(outDisplay).toHaveTextContent('2');
        })
    })
test('it results in a walk after 4 balls', () => {
    const component = render(<Dashboard/>);
    const ball= component.getByText('Ball');
    const ballDisplay=component.getByTestId('balls');
    fireEvent.click(ball);
    fireEvent.click(ball);
    fireEvent.click(ball);
    fireEvent.click(ball);
    expect(ballDisplay).toHaveTextContent('0')
})