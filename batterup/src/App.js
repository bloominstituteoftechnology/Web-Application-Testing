import React, {
  Component
} from 'react';
import Display from './components/Display';
import Dashboard from './components/Dashboard'
import './App.css';


class App extends Component {
  state = {
    balls: 0,
    strikes: 0,
    fouls: 0
  }
  strikeHandler = () => {
    if (this.state.strikes === 2) {
      this.setState({
        strikes: 0,
        balls: 0,
        fouls: 0
      })
    } else {
      let strikesCount = this.state.strikes;
      strikesCount++;
      this.setState({
        strikes: strikesCount
      })
    }
  };
  ballHandler = () => {
    if (this.state.balls  ===3 ){
      this.setState({
        balls:0,
        strikes:0,
        fouls:0
      })
    }else{
      let ballCount = this.state.balls;
      ballCount ++;
      this.setState({
        balls: ballCount
      })
    }
  };
  foulHandler=()=>{
    if(this.state.strikes < 2 ){
     let fouls = this.state.fouls;
     let strikes = this.state.strikes;
     fouls ++;
     strikes++;
      this.setState({fouls:fouls, strikes:strikes})
    }else{
      let fouls = this.state.fouls;
      fouls++;
      this.setState({fouls: fouls})
    }
  }

  render() {
    return ( 
    <div className = "App" >
      <Display fouls={ this.state.fouls } balls={ this.state.balls } strikes={ this.state.strikes}/> 
      <Dashboard strikeBtn = {this.strikeHandler} ballBtn={this.ballHandler} foulBtn={this.foulHandler}/> 
      </div>
    );
  }
}

export default App;