import React, { useState } from 'react'
import Display from "./Display"

const Dashboard = () => {
    const [balls, setBalls] = useState();
    const [strikes, setStrikes] = useState();
    const [fouls, setFouls] = useState();

    ballCount() {

    }

    strikeCount() {

    }

    foulCount() {}

    return (
        <div>
            <div className="button-board">
                <button>balls</button>
                <button>strike</button>
                <button>foul</button>
                <button>hit</button>
            </div>
            <Display />
        </div>
    )
}

export default Dashboard
