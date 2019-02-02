import React from "react";


class Display extends React.Component {
  render() {
    return (
      <div>
        <div data-testid="Strikes">{`${this.props.strikes} Strikes`}</div>
        <div data-testid="Balls">{`${this.props.balls} Balls`}</div>
        <div data-testid="Fouls">{`${this.props.fouls} Fouls`}</div>
      </div>
    )
  }
}

export default Display;