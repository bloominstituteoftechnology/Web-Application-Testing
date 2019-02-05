import React from 'react';
import { render, fireEvent, cleanup } from 'react-testing-library';   // built in assertions
import 'jest-dom/extend-expect';  
import Display from './display';
import Dashboard from './dashboard';
import Diandra from './diandra';

import 'react-testing-library/cleanup-after-each';  //might be redundant with afterEach(cleanup)

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

// Diandra Approach

// react-testing-library 'enforce good practices' focus on behavior (not state, props)
// jest-dom is nice, but not as important


// User Stories (one recommended form of writing requirements); get 'out' of developer brain
// As a _______ I want ______ so that _____
// As a scoreboard tech I want to see the current number of strikes and balls
// so that I know when a player has struck out


// [Diandra would only test this]
// display the count of balls and strikes for the at-bat.

// describe('The Display Component Diandra', () => {
//     it('renders the correct count of balls and strikes', () => {
//         const component = render(<Display balls="2" strikes="1"/>);

//         component.getByText(/2 balls/i);
//         component.getByText(/1 strikes/i);
//         // const element = component.getByText(/1 strikes/i);
//         // expect(element).toHaveTextContent(/2 balls/i);
//     });
// })

describe('The Diandra Component', () => {
    it('renders the correct count of balls and strikes', () => {
        const { getByText } = render(<Diandra balls="2" strikes="1"/>);

        getByText(/2 balls/i);
        getByText(/1 strikes/i);
    });

    it('render display header', () => {
        console.log('document', document.body.outerHTML);
    });
})

// [These three are triggered from Dashboard]
// resets both balls and strikes to 0 when a player reaches 3 strikes or 4 balls.
// resets both balls and strikes to 0 when a player connects any type of hit.
// should be updated when the user records activity on the Dashboard component.