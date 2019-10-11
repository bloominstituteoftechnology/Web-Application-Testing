import React from 'react';
import "./Comp.css";

export default function Dashboard ({balls, setBalls, strikes, setStrikes}){

    const HandleStrike = () => {
        // balls and strikes reset to 0 when a player reaches 3 strikes or 4 balls
        strikes >= 2 ? setStrikes(0) : setStrikes(strikes + 1);
    }

    const HandleBall = () => {
        // balls and strikes reset to 0 when a player reaches 3 strikes or 4 balls
        balls >= 3 ? setBalls(0) : setBalls(balls+1);
    }

    const HandleFoul = () => {
        // a foul increases strikes up to 2. With no strikes, a foul makes it 1 strike. 
        // With 1 strike, a foul makes it 2 strikes. 
        // With two strikes a foul has no effect, count stays at 2 strikes.
        if (strikes < 2){
            setStrikes(strikes+1);
        }else{
            setStrikes(strikes);
        }
    }

    const HandleHit = () => {
        // balls and strikes reset to 0 when a hit is recorded.
        setStrikes(0);
        setBalls(0);
    }

    return(
        <div>
            <button onClick = {HandleStrike} >Strike</button>
            <button onClick = {HandleBall} >Ball</button>
            <button onClick = {HandleFoul} >Foul</button>
            <button onClick = {HandleHit} >Hit</button>
        </div>
    )
}