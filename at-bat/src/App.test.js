import React from "react";
import { shallow, mount } from "enzyme";

import App from "./App";
import Dashboard from "./components/Dashboard";

it("renders without crashing", () => {
  shallow(<App />);
});

it("check number of buttons", () => {
  const wrapper = shallow(<Dashboard />);
  const elements = wrapper.find("button");

  expect(elements.length).toBe(4);
});

it("check the state of balls and strikes on load", () => {
  const wrapper = shallow(<App />);
  const instance = wrapper.instance();

  expect(instance.state.balls).toBe(0);
  expect(instance.state.strikes).toBe(0);
});

it("check the operation of the balls button", () => {
  const wrapper = mount(<App />);
  const instance = wrapper.instance();

  const button = wrapper.find("button.ball");

  expect(button.text()).toBe("Ball");

  button.simulate("click");
  expect(instance.state.balls).toBe(1);

  button.simulate("click");
  expect(instance.state.balls).toBe(2);

  button.simulate("click");
  expect(instance.state.balls).toBe(3);

  button.simulate("click");
  expect(instance.state.balls).toBe(0);
});

it("check the operation of the foul button", () => {
  const wrapper = mount(<App />);
  const instance = wrapper.instance();

  const button = wrapper.find("button.foul");

  expect(button.text()).toBe("Foul");

  button.simulate("click");
  expect(instance.state.strikes).toBe(1);

  button.simulate("click");
  expect(instance.state.strikes).toBe(2);

  button.simulate("click");
  expect(instance.state.strikes).toBe(2);
});

it('check the operation of the strike button', () => {
  const wrapper = mount(<App />);
  const instance = wrapper.instance();

  const button = wrapper.find("button.strike");

  expect(button.text()).toBe("Strike");

  button.simulate("click");
  expect(instance.state.strikes).toBe(1);

  button.simulate("click");
  expect(instance.state.strikes).toBe(2);

  button.simulate("click");
  expect(instance.state.strikes).toBe(0);
})

it('check the operation of the hit button', () => {
  const wrapper = mount(<App />);
  const instance = wrapper.instance();

  const button = wrapper.find('button.hit');
  
  expect(button.text()).toBe('Hit');

  button.simulate('click');
  expect(instance.state.strikes).toBe(0);
  expect(instance.state.balls).toBe(0);
})