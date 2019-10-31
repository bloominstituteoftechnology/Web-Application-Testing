import React from 'react';

class Display extends React.Component {
  constructor (props){
    super()
  }
  render() {
    return (
      <div>
        <h2>Balls</h2>
        <div data-testid='ballCount'>
          {this.props.count.balls}
        </div>
        <h2>Strikes</h2>
        <div data-testid='strikeCount'>
          {this.props.count.strikes}
        </div>
      </div>
    )
  }
}
export default Display;