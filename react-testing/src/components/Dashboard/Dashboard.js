import React, { Component } from 'react'
import Button  from '../styled/Button';

export default class Dashboard extends Component {
  state = {
     
  }
  render() {
    return (
      <div>
        <Button>Strike</Button>
        <Button>Ball</Button>
        <Button>Hit</Button>
        <Button>Foul</Button>
      </div>
    )
  }
}
