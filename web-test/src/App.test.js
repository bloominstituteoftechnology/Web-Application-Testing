import React from 'react';
import "@testing-library/jest-dom/extend-expect";
import { render, fireEvent, cleanup } from '@testing-library/react';
import App from './App';
// test('renders learn react link', () => {
//   const { getByText } = render(<App />);
//   const linkElement = getByText(/learn react/i);
//   expect(linkElement).toBeInTheDocument();
// });
afterEach(cleanup);
it('matches snapshot', () =>{
  const { asFragment } = render(<App />);
  expect(asFragment()).toMatchSnapshot();
});

it('renders 4 buttons w/o crashing', ()=>{
  const { getByTestId } = render(<App/>);
  const buttonDiv = getByTestId('btnParent');
  expect(buttonDiv.children.length).toBe(4);
})