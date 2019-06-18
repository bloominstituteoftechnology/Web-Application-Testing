import React, { Component } from "react";

import Display from './display'

export default class dashboard extends Component {
  constructor(props) {
    super(props);

    this.state = {
      strike: 0,
      ball: 0,
      foul: 0,
      hit: 0
    };
  }

  render() {
    return (
      
      <Display strike={} ball={} foul={} hit={} />>
    )
  }
}
