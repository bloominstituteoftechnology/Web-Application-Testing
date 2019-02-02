import React, { Component } from "react";

class Display extends Component {
   render() {
      return(
         <>
            <div>
               <p data-testid="balls">Balls {this.props.balls}
               </p> 
               <p data-testid="strikes">Strikes {this.props.strikes}</p>
               <p data-testid="outs">Outs {this.props.outs}</p>
               <p data-testid="hits">Hits {this.props.hits}</p>
               <p data-testid="fouls">Fouls {this.props.fouls}</p>
            </div>
         </>
      )
   }
}

export default Display;