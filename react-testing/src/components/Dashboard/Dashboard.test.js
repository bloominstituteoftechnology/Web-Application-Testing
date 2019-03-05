import React from 'react';
import { cleanup, fireEvent, render } from 'react-testing-library';
import 'jest-dom/extend-expect';
import Dashboard from './Dashboard';
import Display from '../Display/Display';

describe('Dashboard Component Testing', () => {
    
      test('It should render the dashboard component', () => {
           render(<Dashboard />);
      });

      test('It should render all the buttons in the dashboard', () => {
           const component = render(<Dashboard />);
           const strikeButton = component.getByTestId('strike-button');
           const ballButton = component.getByTestId('ball-button');
           const hitButton = component.getByTestId('hit-button');
           const foulButton = component.getByTestId('foul-button');
           expect(strikeButton).toBeDefined();
           expect(ballButton).toBeDefined();
           expect(hitButton).toBeDefined();
           expect(foulButton).toBeDefined();
      });

      test('It should update Button on dashboard on click' , () => {
        const component = render(<Dashboard />);
        const {getByTestId} = render(<Display balls={0} strikes={0} />);
        const strikeButton = component.getByTestId('strike-button');
        const ballButton = component.getByTestId('ball-button');
        const hitButton = component.getByTestId('hit-button');
        const foulButton = component.getByTestId('foul-button');
      
        fireEvent.click(strikeButton);
        fireEvent.click(ballButton);
        fireEvent.click(hitButton);
        fireEvent.click(foulButton);
        
       
        const strike = getByTestId('strike');
        const ball = getByTestId('ball');
        
        expect(strike).toBeDefined();
        expect(ball).toBeDefined();


    });
});