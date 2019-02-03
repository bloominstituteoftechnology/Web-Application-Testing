import React from 'react';
import { render, fireEvent, cleanup } from 'react-testing-library';
import 'jest-dom/extend-expect';
import Display from './display';
import Dashboard from './dashboard';


afterEach(cleanup)

describe('The Display Component', () => {
    test('renders display.js component', () => {
        render(<Display />);
    });

    test('display the count of balls', () => {
        const component = render(<Display balls={0}/>);
        const count = component.getByTestId('count');
        expect(count).toHaveTextContent('0');
    });

    // test('display the count of balls', () => {
    //     const component = render(<Display />);
    //     const count = component.getByTestId('count');
    //     console.log(count)
    //     expect(count).textContent.toBe('0')
    // });

    // test('display the count of balls', () => {
    //     const component = render(<Display balls={0}/>);
    //     const count = component.getByTestId('count');
    //     console.log(count)
    //     expect(count.textContent).toBe('0');
    // });

    test('display the strike number', () => {
        const component = render(<Display strikes={0}/>);
        const strike = component.getByTestId('strike');
        expect(strike).toHaveTextContent('0');
    });

   
})

describe('The Dashboard Component', () => {
    test('renders dashboard.js component', () => {
        render(<Dashboard/>)
    });

    test('renders Strike button', () => {
        const component = render(<Dashboard/>);
        const strikeButton = component.getByTestId('strikeButton');
        expect(strikeButton).toHaveTextContent(/strike/i);
    });

    test('renders Ball button', () => {
        const component = render(<Dashboard/>);
        const ballButton = component.getByTestId('ballButton');
        expect(ballButton).toHaveTextContent(/ball/i);
    });

    test('renders Hit button', () => {
        const component = render(<Dashboard/>);
        const hitButton = component.getByTestId('hitButton');
        expect(hitButton).toHaveTextContent(/hit/i);
    });

    test('reset strikes to 0 when player reaches 3 strikes', () => {
        const component = render(<Dashboard/>);
        const component2 = render(<Display/>);
        const firstRender = component2.asFragment();
        //const strikeButton = jest.fn()   //component.getByTestId("strikeButton");
        fireEvent.click(component.getByTestId("strikeButton"));
        expect(firstRender).toMatchDiffSnapshot(component2.asFragment());
    });
})