import React, { Component } from 'react'
import Display from './Display';

export default class Dashboard extends Component {
  render() {
    return (
      <div>
        <ul>
          <li></li>
          <li></li>
          <li></li>
        </ul>
        <div>
          <Display></Display>
        </div>
      </div>
    )
  }
}
