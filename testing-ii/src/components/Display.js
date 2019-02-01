import React from 'react';

class Display extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <>
        <div>strikes: {this.props.strikes}</div>
        <div>balls: {this.props.balls}</div>
      </>
    )
  }
}

export default Display;