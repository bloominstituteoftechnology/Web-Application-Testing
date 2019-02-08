import React, { Component } from 'react'


class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      balls: 0,
      strikes: 0,
      outs: 0,
    }
    this.isInningOver = this.isInningOver.bind(this);
  }
  strike = () => {
    if (this.state.strikes < 2) {
      this.setState(prevState => ({
        strikes: prevState.strikes + 1
      }))
    } else {
      this.setState(prevState => ({
        balls: 0,
        strikes: 0,
        outs: ++prevState.outs
      }));
    }
    setTimeout(() => {
      this.isInningOver();
    }, 1000);
  }

  isInningOver() {
    if (this.state.outs === 3) {
      this.setState(prevState => ({
        balls: 0,
        strikes: 0,
        outs: 0
      }))
    }
  }

  ball() {
    if (this.state.balls < 3) {
      this.setState(prevState => ({
        balls: prevState.balls + 1
      }))
    } else if (this.state.balls === 3) {
      this.setState({
        balls: 0,
        strikes: 0
      })
    }
  }
  foul = () => {
    if (this.state.strikes < 2) {
      this.setState(prevState => ({
        strikes: prevState.strikes + 1
      }))
    }
  }
  hit = () => {
    this.setState({
      balls: 0,
      strikes: 0,
    })
  }
  render() {
    return (
      <div>
        <button onClick={() => this.strike()}>Strike</button>
        <button onClick={() => this.ball()}>Ball</button>
        <button onClick={() => this.foul()}>Foul</button>
        <button onClick={() => this.hit()}>Hit</button>
        <h2 data-testid='strikes'>{this.state.strikes}</h2>
        <h2 data-testid='balls'>{this.state.balls}</h2>
        <h2 data-testid='outs'>{this.state.outs}</h2>
      </div>
    )
  }
}

export default Dashboard;