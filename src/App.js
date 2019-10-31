import React from 'react';
import './App.css';
import Dashboard from './components/Dashboard';
import Display from './components/Display';

class App extends React.Component {
  state = {
    balls: 0,
    strikes: 0
  }

  strikeCounter = () => {
    this.setState({strikes: this.state.strikes + 1})

    if (this.state.strikes === 4 || this.state.balls) {
      this.setState({
        balls: 0,
        strikes: 0
      })
    }
  }

  ballCounter = () => {
    this.setState({balls: this.state.balls + 1})

    if (this.state.balls === 3) {
      this.setState({
        balls: 0,
        strikes: 0
      })
    }
  }

  foulCounter = () => {
    if(this.state.strikes === 0) {
      this.setState({strikes: this.state.strikes + 1})
    } else if (this.state.strikes === 1){
      this.setState({strikes: this.state.strikes + 1})
    }
  }

  hitCounter = () => {
    this.setState({
      balls: 0,
      strikes: 0
    })
  }


  render() {
  return (
    <div className="App">
      <header>
        <h1>Baseball Stadium</h1>
        <Display count={this.state}/>
        <Dashboard  strikeCounter={this.strikeCounter} ballCounter={this.ballCounter} foulCounter={this.foulCounter} hitCounter={this.hitCounter}/>
      </header>
    </div>
  );
  }
}

export default App;
