import React from 'react'
import ReactDOM from 'react-dom';
import * as rtl from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import App from './App';

afterEach(rtl.cleanup);

test('App is rendered', () => {
    const wrapper = rtl.render(<App />);
    const element = wrapper.getByText(/strikes/i)
    expect(element).toBeDefined();
})

test('Render stats input', () => {
    const wrapper = rtl.render(<App />)
    const element = wrapper.queryByText(/stats/i)
    expect(element).toBe(null)
})

it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<App />, div);
    ReactDOM.unmountComponentAtNode(div);
});
