import React, { Component } from 'react'
import Display from './display.js'

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
      alert('strikeout');
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
      alert('Inning Over');
      this.setState(prevState => ({
        balls: 0,
        strikes: 0,
        outs: 0
      }))
    }
  }

  ball() {
  if(this.state.balls < 3){
    this.setState(prevState => ({
      balls: prevState.balls + 1 
    }))
  } else  if (this.state.balls === 3){alert('Walk'); this.setState({
    balls: 0,
    strikes: 0
  })
  }
}

foul = () => {

  }

  hit = () => {

  }


  render() {
    { console.log(this.state) }
    return (
      <div>
        <Display count={this.state} />
        <button onClick={() => this.strike()}>Strike</button>
        <button onClick={() => this.ball()}>Ball</button>
        <button>Foul</button>
        <button>Hit</button>

      </div>
     
    )
  }
}

export default Dashboard