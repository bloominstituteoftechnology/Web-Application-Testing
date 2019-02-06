import React, { Component } from 'react'
import Display from '../Display/Display';
import Dashboard from '../Dashboard/Dashboard';

export default class Container extends Component {
  state = {
     balls: 0,
     strikes:0,
     fouls:0,
     hits:0
  }

  reset = () => {
     if(this.state.balls >=4 || this.state.strikes >= 3) {
         this.setState({
           balls:0,
           strikes:0
        });
     }
  }
  hitHandler = () => {
    if(this.state.hits>0) {
      this.setState({
         balls:0,
         strikes:0
      });
    }
  }
  render() {
    return (
      <div>
        <Dashboard reset={this.reset}/>
        <Display 
           balls={this.state.balls}
           strikes={this.state.strikes}
        />
      </div>
    )
  }
}
