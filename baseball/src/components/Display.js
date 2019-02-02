import React, { Component } from "react";

class Display extends Component {
   render() {
      console.log(this.props.strikes)
      return(
         <>
            <div>
               <p>Balls {this.props.balls}</p> 
               <p>Strikes {this.props.strikes}</p>
               <p>Outs {this.props.outs}</p>
            </div>
         </>
      )
   }
}

export default Display;