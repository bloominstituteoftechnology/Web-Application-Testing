import React, {Component} from "react";
import Display from "./Display";

class Dashboard extends Component {
   state = { 
      balls: 0,
      strikes: 0,
      fouls: 0,
      outs: 0,
      hits: 0,
}
   render() {
      return(
         <>
            <h2 data-testid="header">Batter Up!</h2>
            <Display
               balls={this.state.balls} 
               strikes={this.state.strikes} 
               outs={this.state.outs}
               hits={this.state.hits}
               fouls={this.state.fouls}
            />
            <div>
               <button onClick={() => {this.strike()}}>strike!</button>
               <button onClick={() => {this.ball()}}>ball</button>
               <button onClick={() => {this.foul()}}>foul</button>
               <button onClick={() => {this.hit()}}>hit</button>
            </div>
         </>
      )
   }
   strike() {
      if(this.state.strikes < 2) {
         this.setState((prevState) => ({ strikes: prevState.strikes + 1}))
      } else {
         this.setState({
            strikes: 0,
            outs: this.state.outs + 1
         })
      }
   }

   ball() {
      if(this.state.balls < 3) {
         this.setState((prevState) => ({balls: prevState.balls + 1}))
      } else {
         this.setState((prevState) => ({
            hits: prevState.hits + 1,
            balls: 0,
            strikes: 0,
         }))
      }
   }
   hit() {
      this.setState(prevState => ({hits: prevState.hits +1}))
   }

   foul() {
      if(this.state.outs < 2) {
         if(this.state.outs === 2){
            this.setState(prevState => ({
               outs: prevState.outs + 1,
               balls: 0,
               strikes: 0,
            }))
         } else {
            this.setState(prevState => ({fouls: prevState.fouls +1}))
         }
      } else {
         this.setState(prevState => ({
            outs: 0,
            balls: 0,
            strikes: 0,
            fouls: 0,
         }))
      }
   }
}

export default Dashboard;