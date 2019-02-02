import React, { Component } from 'react'

 class Display extends Component {
     


  render() {
    return (
      <div>
          <h1>Strikes {this.props.count.strikes}</h1>
          <h1>Balls: {this.props.count.balls}</h1>
          <h1>Outs: {this.props.count.balls}</h1>
        
      </div>
    )
  }
}


export default Display