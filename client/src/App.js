import React from 'react';
import './App.css';
//honestly i may replace this with a bit switch but there are no enums in js so it be hard to explain
class App extends React.Component {
  constructor()
  {
    super();
    this.state = {}
  }
  ball=0;
  strike=0;
  out=0;
  render ()
  {
    return (
      <div className="App">
        <div><span>Balls:{this.ball} </span><span>Strikes:{this.strike} </span><span>Outs:{this.out} </span></div>
        <div>
          <button onClick={()=> this.update(false,0,1)}>Ball</button>
          <button onClick={()=> this.update(false,0,0,1)}>Strike</button>
          <button onClick={()=> this.update(false,0,0,0,1)}>Foul</button>
          <button onClick={()=> this.update(true)}>Hit</button>
          <button onClick={()=> this.update(true,1)}>Out</button>
        </div>
      </div>

    );
  }
  update(_reset=false, _out=0,_ball=0,_strike=0,_foul=0,_end=false)
  {
    if(_end) {this.ball = this.strike = this.out = 0; return this.setState({});}
    if(_reset) this.ball = this.strike = 0;
    this.strike += _strike + (this.strike < 2 ? _foul : 0);
    this.ball += _ball
    this.out += _out;
    if(this.out > 2)return this.update(false,0,0,0,0,true); //end of innning
    if(this.strike > 2) return this.update(true,1) //reset at bat and add an out
    if(this.ball > 3) return this.update(true); //reset at bat
    return this.setState({});
  } 
}

export default App;

