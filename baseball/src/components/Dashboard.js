import React from "react";


class Dashboard extends React.Component {
  render() {
    return (
      <div>
        <button data-testid="Strike" onClick={this.props.callStrike}>Strike</button>
        <button data-testid="Ball" onClick={this.props.callBall}>Ball</button>
        <button data-testid="Foul" onClick={this.props.callFoul}>Foul</button>
        <button data-testid="Hit" onClick={this.props.hit}>Hit</button>
      </div>
    )
  }
}

export default Dashboard;