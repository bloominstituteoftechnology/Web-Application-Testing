import React from 'react';
import { render, fireEvent} from '@testing-library/react';
import Dashboard from './Dashboard';
import '@testing-library/react/cleanup-after-each';


describe('<Dashboard />', () => {
    it("displays strikes", () => {
      const { getByText }  = render(<Dashboard />);
      const strikes = getByText(/strike/i);

      fireEvent.click(strikes);

      expect(strikes);
    })

    it("displays balls", () => {
      const { getByText } = render(<Dashboard />);
      const balls = getByText(/ball/i);

      fireEvent.click(balls);

      expect(balls);
    })
  });
