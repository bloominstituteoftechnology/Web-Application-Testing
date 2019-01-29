import React from "react";

class Dashboard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <>
        <div>
          <button data-testid="strike-btn" onClick={this.props.strikes}>
            Strikes
          </button>
          <button data-testid="balls-btn" onClick={this.props.balls}>
            Balls
          </button>
          <button data-testid="hits-btn" onClick={this.props.hits}>
            Hits
          </button>
          <button data-testid="foul-btn" onClick={this.props.foul}>
            Foul
          </button>
        </div>
      </>
    );
  }
}

export default Dashboard;
