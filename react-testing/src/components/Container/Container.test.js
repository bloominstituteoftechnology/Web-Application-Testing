import React from 'react';
import { cleanup , render, fireEvent } from 'react-testing-library';
import Container from './Container.js';
afterEach(cleanup);

describe('The display and dashboard container', () => {
    test('It should update strikes on click' , () => {
           const {getByText,getByTestId }= render(<Container />);
           const button = getByTestId('strike-button');

           fireEvent.click(button);

           getByText('/1 strikes/i');
    });

    test('It should reset the strikes after 3 clicks' , () => {
      const {getByText,getByTestId }= render(<Container />);
      const button = getByTestId('strike-button');

      fireEvent.click(button);
      fireEvent.click(button);
      fireEvent.click(button);

      getByText('/1 strikes/i');
});

});
