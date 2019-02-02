import React from 'react';

class Display extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <>
        <div data-testid="strikes">strikes: {this.props.strikes}</div>
        <div data-testid="balls">balls: {this.props.balls}</div>
      </>
    )
  }
}

export default Display;