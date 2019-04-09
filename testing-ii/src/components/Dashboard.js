import React, { Component } from 'react';

class Dashboard extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <>
        <button onClick={this.props.addStrike}>Strike</button>
        <button onClick={this.props.addBall}>Ball</button>
        <button onClick={this.props.addFoul}>Foul</button>
        <button onClick={this.props.addHit}>Hit</button>
      </>
    )
  }
}

export default Dashboard;