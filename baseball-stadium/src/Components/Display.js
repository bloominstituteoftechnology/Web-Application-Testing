import React from 'react';
import "./Comp.css";

export default function Display ({balls, strikes}){

    return(
        <div className="Results">
            <div>
                <h2>Balls</h2>
                <p>{balls}</p>
            </div>
            <div>
                <h2>Strikes</h2>
                <p>{strikes}</p>
            </div>
        </div>
    )
}