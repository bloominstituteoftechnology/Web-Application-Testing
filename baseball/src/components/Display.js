import React, { Component } from "react";

class Display extends Component {
   render() {
      return(
         <>
            <div>
               <div>
                  <span data-testid="balls">Balls: 
                  </span> 
                  <span data-testid="bvalue"> {this.props.balls}</span>
               </div>
               <div>
                  <span data-testid="strikes">Strikes: </span>
                  <span data-testid="strikevalue">{this.props.strikes}</span>
               </div>
               <div>
                  <span data-testid="outs">Outs: </span>
                  <span data-testid="outvalue">{this.props.outs}</span>
               </div>
               <div>
                  <span data-testid="hits">Hits: </span>
                  <span data-testid="hitvalue">{this.props.hits}</span>
               </div>
               <div>
                  <span data-testid="fouls">Fouls: </span>
                  <span data-testid="foulvalue">{this.props.fouls}</span>
               </div>
            </div>
         </>
      )
   }
}

export default Display;