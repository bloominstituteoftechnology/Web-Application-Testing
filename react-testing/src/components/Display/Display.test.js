import React from 'react';
import {cleanup, render} from 'react-testing-library';
import 'react-testing-library/cleanup-after-each';
afterEach(cleanup);
import Display from "./Display.js";
import 'jest-dom/extend-expect';
/**
 -display the count of `balls` and `strikes` for the at-bat.
- resets both balls and strikes to 0 when a player reaches 3 strikes or 4 balls.
- resets both balls and strikes to 0 when a player connects any type of hit.
- should be updated when the user records activity on the `Dashboard` component.
**/

describe('The Display Component' , () => {
  
   test('It should render the correct count of ball and strikes' , () => {
        // const component = render(<Display balls="2" strikes="1" />);
        // component.getByText(/2 balls/i);
        // component.getByText(/1 strikes/i);
        const {getByText} = render(<Display balls="0" strikes="0" />);
        getByText(/balls:0/i);
        getByText(/strikes:0/i);
   });

   test.skip('It should render display header', () => {
        const component = render(<Display />);
      //   const header = component.getByTestId('header');
      //   expect(header).toHaveTextContent(/header/i);
         component.getByText(/headers/i);
   });   
});