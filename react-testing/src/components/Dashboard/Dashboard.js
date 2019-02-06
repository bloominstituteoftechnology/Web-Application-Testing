import React, { Component } from 'react'
import Button  from '../styled/Button';

export default class Dashboard extends Component {
  constructor(props) {
     super(props);

  }
  render() {
     console.log(props);
    return (
      <div>
        <Button data-testid='strike-button' onClick={props.reset}>Strike</Button>
        <Button data-testid='ball-button' onClick={props.reset}>>Ball</Button>
        <Button data-testid='hit-button'>Hit</Button>
        <Button data-testid='foul-button'>Foul</Button>
      </div>
    )
  }
}
