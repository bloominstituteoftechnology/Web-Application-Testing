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

    it('should do add to ball count... lol', () => {
        const { getByText } = render(<AtBat />);

        const text = getByText(/ball 0/i);
        
        fireEvent.click(getByText(/ball!/i));

        const text2 = getByText(/ball 1/i);

        expect(text).toBe(text2);
    })

    it('should do add to strike count... darn unions', () => {
        const { getByText } = render(<AtBat />);

        const text = getByText(/strike 1/i);
        
        fireEvent.click(getByText(/strike!/i));

        const text2 = getByText(/strike 2/i); 

        expect(text).toBe(text2);
    })
    
    

    it('should do add to hit count... like we can beat Trent Reznor', () => {
        const { getByText } = render(<AtBat />);

        const text = getByText(/hits 0/i);
        
        fireEvent.click(getByText(/hit!/i));

        const text2 = getByText(/hits 1/i);

        expect(text).toBe(text2);
    })


    it('should do other things to... like fouls adding to strikes', () => {
        const { getByText } = render(<AtBat />);

        const text1 = getByText(/strike 0/i);
        const text2 = getByText(/foul 0/i);

        fireEvent.click(getByText(/foul!/i));

        const text3 = getByText(/strike 1/i);
        const text4 = getByText(/foul 1/i);

        expect(text1).toBe(text3);
        expect(text2).toBe(text4);

    })

    it('should do other things to... like resetting on hit', () => {
        const { getByText } = render(<AtBat />);

        const text1 = getByText(/strike 1/i);
        const text2 = getByText(/foul 1/i);
        const text5 = getByText(/ball 0/i);

        fireEvent.click(getByText(/hit!/i));

        const text3 = getByText(/strike 0/i);
        const text4 = getByText(/foul 0/i);
        const text6 = getByText(/ball 0/i);

        expect(text1).toBe(text3);
        expect(text2).toBe(text4);
        expect(text5).toBe(text6);

    })

})
