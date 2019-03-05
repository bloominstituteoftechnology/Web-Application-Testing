import React, { Component } from 'react'
import Button  from '../styled/Button';

export default class Dashboard extends Component {
  constructor(props) {
     super(props);

  }
  render() {
    //  console.log(this.props);
    return (
      <div>
        <Button data-testid='strike-button' onClick={this.props.resetStrikes}>Strike</Button>
        <Button data-testid='ball-button'   onClick={this.props.resetBalls}>Ball</Button>
        <Button data-testid='hit-button'    onClick={this.props.resetHits}>Hit</Button>
        <Button data-testid='foul-button'   onClick={this.props.resetFouls}>Foul</Button>
      </div>
    )
  }
}
