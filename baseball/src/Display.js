// - display the count of `balls` and `strikes` for the at-bat.
// - should be updated when the user records activity on the `Dashboard` component.
import { Dashboard } from "./Dashboard";
import { addBalls, addStrikes} from "./Dashboard"

import React from "react";

export function Display(){

    return (
        <div className="display">
            <h1>At Bat</h1>
            <Dashboard 
            
            />
            <p>{addBalls}</p>
            <p>{addStrikes}</p>

        </div>
    )
}

