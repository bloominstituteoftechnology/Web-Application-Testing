import React from 'react';
import { render, fireEvent } from 'react-testing-library';
import 'jest-dom/extend-expect';

import  AtBat from './AtBat';

describe('<AtBat />', () => {
    it('should show AtBat Component', () => {
        const {getByText} = render(<AtBat />);
        expect(getByText(/player at bat/i)).toBeInTheDocument();
    });

    // it('should show adding fouls', () => {
    //     const { getByText } = render(<AtBat />);
    //     const addfoul = jest.fn();

    //     const foulbutton = getByText(/foul!/i);

    //     fireEvent.click(foulbutton);

    //     expect(addfoul).toHaveBeenCalledTimes(1);
        
    // })  

    // it('calls "onClick" prop on button click', () => {
        
    //     const onClick = jest.fn();
    //     const { getByText } = render(<button onClick={onClick} />);
      
    //     fireEvent.click(getByText(/fouls!/i));
    //     expect(onClick).toHaveBeenCalled();
    // });

    it('should do something damnit', () => {
        const { getByText } = render(<AtBat />);

        const text = getByText(/foul 0/i);
        
        fireEvent.click(getByText(/foul!/i));

        const text2 = getByText(/foul 1/i);

        expect(text).toBe(text2);
    })



})
