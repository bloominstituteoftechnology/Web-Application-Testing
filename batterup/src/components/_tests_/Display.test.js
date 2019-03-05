import React from 'react';
import { render, cleanup } from 'react-testing-library';
import 'jest-dom/extend-expect';
import Display from '../Display';

afterEach(cleanup);

describe('Display component',()=>{
    it('renders the Display component with balls, strikes and fouls', ()=>{
        //Arrange
        const props={
            balls:2,
            strikes:0,
            fouls:0
        }
        render(<Display {...props}/>)
        expect(props.balls).toBe(2);
        expect(props.strikes).toBe(0);
        expect(props.fouls).toBe(0);
        
    }),
    it('renders strike count', ()=>{
       //Arrange
        const props = {balls: 3, strikes: 2, fouls:4};
        //Act 
        const component = render(<Display {...props}/>);
        //Assert
        expect(component.getByText('2')).toHaveClass('strike-count');
    }),
    it('renders ball count', ()=>{
        const props = {balls: 3, strikes:2, fouls:1};
        const component = render(<Display {...props}/>);

        component.getByText('3');
        expect(component.getByText('3')).toHaveClass('ball-count');
    }),
    it('renders foul count', ()=>{
        const props={
            balls:0, strikes:2, fouls:4};
        const component = render(<Display {...props} />);
        
        expect(component.getByText(/fouls:/i)).toHaveClass('fouls');
    })
});