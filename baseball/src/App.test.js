import React from 'react';
import { shallow } from 'enzyme';
import App from './App';


it('renders without crashing', () => {
  shallow(<App />)
});

it('starts with state set to zero', () => {
  const wrapper = shallow(<App />);
  const instance = wrapper.instance();

  expect(instance.state.balls).toBe(0);
  expect(instance.state.strikes).toBe(0);
  expect(instance.state.fouls).toBe(0);
  expect(instance.state.hits).toBe(0);
})

describe('the ball button', () => {
  it('should increment by 1 with each click and reset to 0 after 4', () => {
    const wrapper = shallow(<App />);
    const instance = wrapper.instance();

    const button = wrapper.find('button.ball')

    button.simulate('click');
    expect(instance.state.balls).toBe(1);

    button.simulate('click');
    expect(instance.state.balls).toBe(2);

    button.simulate('click');
    expect(instance.state.balls).toBe(3);

    button.simulate('click');
    expect(instance.state.balls).toBe(4);

    button.simulate('click');
    expect(instance.state.balls).toBe(0);
  })
})
