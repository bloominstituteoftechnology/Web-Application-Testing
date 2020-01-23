import React from "react";

export const Dashboard = (props) => {
    return(
        <div className= 'dashboard-container'>

            <button 
                onClick={()=>{
                    props.setBall( props.atBallBall <= 3 ? props.atBallBall + 1 : 0 )}}
                    >ball
            </button>

            <button
                onClick={()=>{
                    props.setStrke(props.atBallStrike <= 2 ? props.atBallStrike + 1 : 0)}}
                >strike
            </button>

            <button 
                onClick={()=>{
                    props.setStrke(props.atBallStrike === 0 || props.atBallStrike === 1 ? props.atBallStrike + 1 : props.atBallStrike)}}
                    >foul
            </button>

            <button
            onClick={() =>{
                props.setStrke(0)
                props.setBall(0)
            }}
            >hit
            </button>


        </div>
    )
}