import React from 'react';
import App from './App';
import * as rtl from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

import Dashboard from './components/Dashboard';
import Display from './components/Display';

afterEach(rtl.cleanup);

test("Render the app", () =>{
  const wrapper = rtl.render(<App />)
  wrapper.debug()
})

test('contains foul and hit button', () => {
	const containerDash = rtl.render(<Dashboard />);
	containerDash.getByText(/hit/i);
	containerDash.getByText(/foul/i);
});

// test('balls and strikes are equal', () => {
//   const containerDash = rtl.render(<App />);
//   const balls = containerDash.getByDisplayValue(/balls/i)
// 	expect(balls).toBeLessThan(4)
// });