import React from 'react';

//CSS
import './App.css';

//Panel imports
import DisplayPanel from './Components/DisplayPanel/DisplayPanel';
import BtnPanel from './Components/BtnPanel/BtnPanel';

export const addStrike = currentStrike => {
  return currentStrike + 1;
}

export class App extends React.Component {
  state = {
    strike: 0,
    ball: 0
  }

  handleStrikes = e => {
    e.preventDefault();

    this.setState({
      strike: addStrike(this.state.strike)
    })

    if(this.state.strike > 2){
        this.setState({
          strike: 0,
        })
  }
}

  handleBall = e => {
    e.preventDefault();
    // console.log('Ball Clicked')
    this.setState({
      ball: this.state.ball + 1,
    })
    if(this.state.ball > 3){
      this.setState({
        ball: 0,
      })
    }
  }

  handleHit = e => {
    e.preventDefault();
    // console.log('Hit Clicked!');
    this.setState({
      strike: 0,
      ball: 0
    })
  }

  handleFoul = e => {
    e.preventDefault();

    if(this.state.strike < 2){
      this.setState({
        strike: this.state.strike + 1
      })
    }

    if(this.state.strike === 2){
      this.setState({
        strike: 2,
      })
    } 
}

  render(){
    return (
      <div className="App">
        <DisplayPanel 
        strike={this.state.strike} 
        ball={this.state.ball}/>

        <BtnPanel 
        handleStrike={this.handleStrikes}
        handleBall={this.handleBall}
        handleHit={this.handleHit}
        handleFoul={this.handleFoul}
        />
      </div>
    );
  }
}
  

export default App;
