import React from 'react';
import {render, fireEvent } from 'react-testing-library';
import 'jest-dom/extend-expect';

import Display from './Display.js'



describe("<Display/> Component Tests", () => {


    it("renders without crashing", () => {
  
      const renderTest = render(<Display />);
    });

    
    it('should render the numbers of strikes', () => {
  
      
      const { getByText } = render(<Display />);
      const strikes = getByText(/strikes:/i);

      const hitStrikeButton = getByText(/strikes/i);
            fireEvent.click(hitStrikeButton);

      expect(strikes).toHaveTextContent(1);
    });
  });