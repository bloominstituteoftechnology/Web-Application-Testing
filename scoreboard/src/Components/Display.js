import React from "react"

const ScoreDisplay = (props) => {
    return (
        <div>
            <h1>Balls : {props.balls}</h1>
            <h1>Strikes : {props.strikes}</h1>
        </div>
    )
}

export default ScoreDisplay