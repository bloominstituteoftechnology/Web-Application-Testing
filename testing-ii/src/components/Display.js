import React from 'react';

class Display extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <>
        <div>strikes: {this.props.handleStrikes}</div>
        <div>balls: {this.props.handleBalls}</div>
      </>
    )
  }
}

export default Display;