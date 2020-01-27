import React, { useState } from "react";
import './Dashboard.scss';


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

    if (hit > 1) {
        setStrike(strike + 1) && setFoul(foul + 1);
    }


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