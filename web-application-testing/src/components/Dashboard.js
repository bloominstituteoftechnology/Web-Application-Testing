import React, { useState } from 'react';
import { Display } from './Display';


export const Dashboard = () => {
const [balls, setBalls] = useState(0);
const [strikes, setStrikes] = useState(0);

const showBalls = () => {
    if (balls < 4) {
        setBalls(balls + 1)
    }; 
};

const showStrikes = () => {
    if (strikes < 3) {
        setStrikes(strikes + 1)
    };
};
const showHits = () => {
        setBalls(0);
        setStrikes(0);
    };
   

const showFouls = () => {
    if (strikes < 2) {
        setStrikes(strikes + 1)
    };
};    


return(
    <div className="scoreboard">
        <Display balls={balls} strikes={strikes}/>
        <button onClick={showBalls}>Ball</button>
        <button onClick={showStrikes}>Strike</button>
        <button onClick={showHits}>Hit</button>
        <button onClick={showFouls}>Foul</button>
        </div>
)}