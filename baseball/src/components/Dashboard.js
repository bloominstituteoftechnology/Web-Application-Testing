import React, {Component} from "react";
import Display from "./Display";

class Dashboard extends Component {
   state = {
      balls: 0,
      strikes: 0,
      fouls: 0,
      outs: 0,
   }
   render() {
      return(
         <>
            <h2 data-testid="title">Batter Up!</h2>
            <Display 
               balls={this.state.balls} 
               strikes={this.state.strikes} 
               outs={this.state.outs}
            />
            <div>
               <button onClick={() => {this.strike()}}>strike!</button>
               <button>ball</button>
               <button>foul</button>
               <button>hit</button>
            </div>
         </>
      )
   }
   strike() {
      if(this.state.strikes < 2) {
         this.setState((prevState) => ({ strikes: prevState.strikes +1}))
      } else {
         this.setState({
            strikes: 0,
            outs: this.state.outs + 1
         })
      }
   }
}

export default Dashboard