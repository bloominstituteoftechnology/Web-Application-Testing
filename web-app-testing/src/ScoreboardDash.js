import React, { useState } from "react";
import ScoreboardDisplay from "./ScoreboardDisplay";

const ScoreboardDash = ({ strikeCount, ballCount, incrementStrikeCount, incrementBallCount, resetStrikeCount, resetBallCount, handleFoul }) => {

    return (
        <div>
            <p>Update outcome of last pitch:</p>
            <button onClick={incrementBallCount}>Add Ball</button>
            <button onClick={incrementStrikeCount}>Add Strike</button>
            <button onClick={() => {
                resetBallCount(); 
                resetStrikeCount();
                }}> Hit 
            </button>
            <button onClick={handleFoul}>Foul</button>
            <button onClick={resetStrikeCount}>Reset Strikes</button>
            <button onClick={resetBallCount}>Reset Balls</button>
        </div>
    )
}
export default ScoreboardDash;