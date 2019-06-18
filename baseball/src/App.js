import React from 'react';
import './App.css';
import Display from  './components/Display';
import Dashboard from './components/Dashboard';

class App extends React.Component {

  state = {
    balls: 0,
    strikes: 0,
  }

  render () {
    return (
      <div className="App">
        <header className="App-header">
          <h1>Base Ball Game</h1>
        </header>
        <main>
          <Display 
            getBalls={this.getBalls} 
            getStrikes={this.getStrikes} 
          />
          <Dashboard 
            setStrike={this.setStrike}   
            setBall={this.setBall}
            setHit={this.setHit}
            setFoul={this.setFoul}
          />
        </main>
      </div>
    );
  }

  getBalls = () => {
    return this.state.balls;
  }

  getStrikes = () => {
    return this.state.strikes;
  }

  setStrike = () => {
    if(this.state.strikes === 2) 
      this.setState({...this.state, strikes:0})
    else
      this.setState({...this.state, strikes:this.state.strikes+1})
  }
  setBall = () => {
    if(this.state.balls === 3)
      this.setState({...this.state, balls:0})
    else
      this.setState({...this.state, balls:this.state.balls+1})
  }
  setHit = () => {
    this.setState({balls:0, strikes:0})
  }
  setFoul =  () => {
    if(this.state.strikes < 2) {
      this.setState({...this.state, strikes:this.state.strikes+1})
    }
  }
  
}

export default App;
