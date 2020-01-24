import React from 'react';
import * as rtl from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import App from './App';
import Dashboard from './components/Dashboard'
import Display from './components/Display'


test('renders without crashing', () => {

  const wrapper = rtl.render(<App/>)
  expect(wrapper).toBeVisible
});


test('renders dashboard component', () => {
  const wrapper = rtl.render(<Dashboard/>)
  const element = wrapper.getByText(/hit/i)
  expect(element).toBeInTheDocument()

  
})

// test ('contains button components', () =>{
//  // ARRANGE
//  const expectedHit = 2;
 
// const container = rtl.render(<App />);
//   const getAllByText = container.getAllByText;

 

//   // ACT
  
//   const hitElements = getAllByText(/hit/i);

//   // ASSERT
//   expect(hitElements.length).toBe(expectedHit);
// });


