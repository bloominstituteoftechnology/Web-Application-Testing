import React, { useState } from "react";
import ScoreboardDash from "./ScoreboardDash";

const ScoreboardDisplay = ({ strikeCount, ballCount, pitchCount }) => {

    return (
        <div>
            <p>Scoreboard Display</p>
            <h3>Balls: {ballCount}</h3>
            <h3>Strikes: {strikeCount}</h3>
            <h3>Pitch Count: {pitchCount}</h3>
            
        </div>
    )
}

export default ScoreboardDisplay;