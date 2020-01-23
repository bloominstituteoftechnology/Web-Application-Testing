import React from "react";

export const Display = (props) =>{
    return(
        <div className= 'display-contaoner' >
        <div >
          <h2 >Balls</h2>
          <div >{props.atBallBall}</div>
        </div>
     
        <div >
          <h2 >Strikes</h2>
          <div >{props.atBallStrike}</div>
        </div>
      </div> 
    )
};