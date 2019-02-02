import React, { Component } from 'react'
import Display from './display.js'

 class Dashboard extends Component {
constructor(props){
super(props);

this.state = {
    balls: 0,
    strikes: 0,
    outs: 0,
}

const strike = () =>{

}

const ball = () => {

}

const foul = () => {

}

const hit = () => {

}

}
  render() {
    return (
      <div>
          <Display count={this.state}/>
        
      </div>
    )
  }
}

export default Dashboard