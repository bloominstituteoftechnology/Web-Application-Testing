import React from 'react';
import ReactDOM from 'react-dom';
import { render, fireEvent, waitForElement } from 'react-testing-library';
import 'jest-dom/extend-expect';

import App from './App';

describe('<App/>', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<App />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  describe('Select button', () => {
    it('should add a strike', () => {

      const { getByText, getByTestId } = render(<App />);


      const button = getByText('Strike');

      fireEvent.click(button);
      const selected = getByTestId('Strikes');

      expect(selected).toHaveTextContent(/1 Strikes/i);
    });
  });
})

