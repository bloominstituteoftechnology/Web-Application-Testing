import React from "react"

const ScoreDisplay = (props) => {
    return (
        <div>
            <h1 data-testid='ballValues'>Balls : {props.balls}</h1>
            <h1 data-testid='strikeValues'>Strikes : {props.strikes}</h1>
        </div>
    )
}

export default ScoreDisplay