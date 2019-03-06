import React from 'react';
import Display from './components/Display';
import Dashboard from './components/Dashboard';

class BattingApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      strikes: 0,
      balls: 0
    };
  }

  reset() {
    this.setState({ strikes: 0, balls: 0 });
  }

  foulsToStrikes(strikes) {
    switch (strikes) {
      case 0:
        return 1;
      case 1:
        return 2;
      default:
        return 0;
    }
  }

  strike() {
    let strikes = this.state.strikes + 1;
    if (strikes >= 3)
      this.reset();
    else
      this.setState({ strikes });
  }

  ball() {
    let balls = this.state.balls + 1;
    if (balls >= 4)
      this.reset();
    else
      this.setState({ balls });
  }

  foul() {
    let strikes = this.state.strikes + this.foulsToStrikes(this.state.strikes);
    if (strikes >= 3)
      this.reset();
    else
      this.setState({ strikes });
  }

  hit() {
    this.reset();
  }

  render() {
    return (
      <div className="batting-app">
        <Display strikes={this.state.strikes} balls={this.state.balls} />
        <Dashboard funcs={{ 
          strike: () => this.strike(), 
          ball: () => this.ball(),
          foul: () => this.foul(),
          hit: () => this.hit()  
        }} />
      </div>
    );
  }
}

export default BattingApp;
