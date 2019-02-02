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

describe('the strike button', () => {
  it('should increment by 1 with each click and reset to 0 after 3', () => {
    const wrapper = shallow(<App />);
    const instance = wrapper.instance();

    const button = wrapper.find('button.strike')

    button.simulate('click');
    expect(instance.state.strikes).toBe(1);

    button.simulate('click');
    expect(instance.state.strikes).toBe(2);

    button.simulate('click');
    expect(instance.state.strikes).toBe(3);

    button.simulate('click');
    expect(instance.state.strikes).toBe(0);
  })
})

describe('the foul button', () => {
  it('should increment by 1 with each click', () => {
    const wrapper = shallow(<App />);
    const instance = wrapper.instance();

    const button = wrapper.find('button.foul')

    button.simulate('click');
    expect(instance.state.fouls).toBe(1);

    button.simulate('click');
    expect(instance.state.fouls).toBe(2);

    button.simulate('click');
    expect(instance.state.fouls).toBe(3);
  })
})

describe('the hit button', () => {
  it('should reset balls, strikes and fouls to 0', () => {
    const wrapper = shallow(<App />);
    const instance = wrapper.instance();

    const button = wrapper.find('button.hit')

    button.simulate('click');
    expect(instance.state.balls).toBe(0);
    expect(instance.state.strikes).toBe(0);
    expect(instance.state.fouls).toBe(0);
  })
})