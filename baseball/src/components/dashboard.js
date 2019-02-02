import React, { Component } from 'react'
import Display from './display.js'

 class Dashboard extends Component {
constructor(props){
super(props);

this.state = {
    balls: 0,
    strikes: 0,
    outs: 0,
}
this.strike = this.strike.bind(this);
this.isInningOver = this.isInningOver.bind(this);

}

strike = () =>{
if (this.state.strikes <2){
 this.setState(prevState =>({
     strikes: prevState.strikes + 1
 }))
} else if (this.state.strikes === 2){
    this.setState(prevState => ({
        balls: 0,
        strikes:0,
        outs: prevState.outs + 1
    }));
}
 this.isInningOver();
}


isInningOver(){
    if (this.state.outs === 3){
        alert('Inning Over');
        this.setState(prevState => ({
            balls:0,
            strikes:0,
            outs:0
        }))
}
}

ball(){

}

foul = () => {

}

hit = () => {

}


  render() {
    
    return (
      <div>
          <Display count={this.state}/>
          <button onClick={() => this.strike()}>Strike</button>
          <button>Ball</button>
          <button>Foul</button>
          <button>Hit</button>
        
      </div>
    )
  }
}

export default Dashboard