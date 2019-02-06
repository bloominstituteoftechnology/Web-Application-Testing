import React, { Component } from 'react'
import Display from '../Display/Display';
import Dashboard from '../Dashboard/Dashboard';

export default class Container extends Component {
  render() {
    return (
      <div>
        <Dashboard />
        <Display />
      </div>
    )
  }
}
