import React, {useState} from "react";





export default function StrikeChecker()  {

const [ballCount, setBallCount] = useState(0);






    return (
        <div>

            <h1>{ballCount} </h1>
            <button onClick={() => setBallCount(ballCount + 1) }>add</button>

        </div>

    )
}