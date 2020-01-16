import React, { useState } from 'react';


export default function Dashboard() {
    const [balls, setBalls] = useState(0);
    const [strikes, setStrikes] = useState(0);
    const [fouls, setFouls] = useState(0);
    const [hits, setHits] = useState(0);


    return (
        <div>
            <h1>Dashboard</h1>
            <h2>Balls: {balls}</h2>
            <button onClick={()=> setBalls( () => {if (balls > 3) {return setBalls(0)} else {return balls + 1}})}>Ball</button>
            <h2>Strikes: {strikes}</h2>
            <button onClick={()=> setStrikes( () => {if (strikes > 2) {return setStrikes(0)} else {return strikes + 1}})}>Strike</button>
            <h2>Fouls: {fouls}</h2>
            <button onClick={()=> setFouls( () => {if (fouls > 1) {return setFouls(0)} else {return fouls + 1}})}>Foul</button>
            <h2>Hits: {hits}</h2>
            <button onClick={()=>setHits(hits + 1)}>Hit</button>
        </div>
    )
}