import React from "react";
import * as rtl from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import App from './App';

afterEach(rtl.cleanup);

test('render?', () => {
  const app = rtl.render(<App />)
  const strike = app.getByText(/strikes/i)
  expect(strike).toBeVisible()
  const ball = app.getByText(/balls/i)
  expect(ball).toBeVisible()
  const foul = app.getByText(/fouls/i)
  expect(foul).toBeVisible()
  const hit = app.getByText(/hits/i)
  expect(hit).toBeVisible()
});

test('strike/foul math', () => {
  const app = rtl.render(<App />);
  const strike = app.getByText(/strikes: 0/i)
  const sbutton = app.getByText('Strike', { exact: true })
  const foul = app.getByText(/fouls/i)
  const fbutton = app.getByText('Foul', { exact: true})
  rtl.fireEvent.click(sbutton);
  expect(strike).toHaveTextContent(1);
  rtl.fireEvent.click(fbutton);
  expect(foul).toHaveTextContent(1);
  expect(strike).toHaveTextContent(1);
});

test('ball math', () => {
  const app = rtl.render(<App />);
  const ball = app.getByText(/balls: 0/i)
  const bbutton = app.getByText('Ball', { exact: true })
  rtl.fireEvent.click(bbutton);
  expect(ball).toHaveTextContent(1);
})

test('hit math', () => {
  const app = rtl.render(<App />);
  const hit = app.getByText(/hits/i)
  const hbutton = app.getByText('Hit', {exact: true})
  rtl.fireEvent.click(hbutton);
  expect(hit).toHaveTextContent(0);
})