import React, { useState } from "react";
import './Dashboard.scss';

export const addStrike = (currentCount) => {
    currentCount + 1;
}

export const addFoul = (currentCount) => {
    if (foul < 2 && strike < 2) {
       return currentCount + 1;
    } 
    setStrikeCount(0);
}

const Dashboard = ({strike, setStrike, ball, setBall, foul, setFoul, hit, setHit}) => {

    
    // if (strike > 2) {
    //     setStrike(0);
    // }

    // if (foul > 2) {
    //     setStrikeCount(strikeCount + 1)
    // }

    // if (ball > 3) {
    //     setStrike(0) && setFoul(0);
    // }

    // export const addHit = currentStrikeCount => {
    //     return currentStrikeCount * 0;
    //   };

    return (
        <div className="dashboard-container">
            <button onClick={() => setStrike(addStrike(strike))}>Strike</button>
            <button>Ball</button>
            <button>Foul</button>
            <button>Hit</button>
        </div>
    )
};

export default Dashboard;