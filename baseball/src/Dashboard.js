// - provide a button that the person in charge can press every time there is a `strike`, `ball`, `foul` or `hit`.
// - there is **NO** need to specify the type of hit (single, double, etc).
// - changes recorded on this component should update the information shown by the `Display` component.

import React, {useState} from "react";

export const addStrikes = currentStrike => {
    if(currentStrike >= 2){
        return 0;
    }else{
        return currentStrike + 1;
    }
};

export const addBalls = currentBall => {
    if(currentBall >= 3){
        return 0;
    }else{
        return currentBall + 1;
    }
};

export const addFoul = currentStrike => {
    if(currentStrike >= 2 ){
        return currentStrike;
    }else{
        return currentStrike + 1;
    }
};

export const hit = currentHit => {
    return (currentHit = 0);
};


export function Dashboard(){

    const [ strikes, setStrikes ] = useState(0);

    const [ balls, setBalls ] = useState(0);

    return(
        
        <div className="dashboard">
            <div className="scoreboard">Balls: {balls}</div>
            <div className="scoreboard">Strikes: {strikes}</div>
            <button onClick={() => setStrikes(addStrikes(strikes))}>Strike</button>
            <button onClick={() => setBalls(addBalls(balls))}>Ball</button>
            <button onClick={() => setStrikes(addFoul(strikes))}>Foul</button>
            <button onClick={() => (hit(strikes), addBalls(hit(balls)))}>Hit</button>
        </div>
    )
}