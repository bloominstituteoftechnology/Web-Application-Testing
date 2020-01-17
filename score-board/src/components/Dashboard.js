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
            <button onClick={()=> setBalls( (hits) => {
                if (balls > 3) {
                    setBalls(0)
                    setStrikes(0)
                    setFouls(0)
                } else {
                    return balls + 1
                }
            })}
            >Ball
            </button>
            <h2>Strikes: {strikes}</h2>
            <button onClick={()=> setStrikes( () => {
                if (strikes > 2) {
                    setStrikes(0)
                    setBalls(0)
                    setFouls(0)
                } else {
                    return strikes + 1
                }})}
            >Strike
            </button>
            <h2>Fouls: {fouls}</h2>
            <button onClick={()=> setFouls( () => {
                if (fouls > 1) {
                    setFouls(0)
                } else if (fouls < 2){
                    setFouls(fouls + 1)
                    setStrikes(strikes +1)
                }})}
            >Foul
            </button>
            <h2>Hits: {hits}</h2>
            <button onClick={() => setHits(hits + 1)}
            >Hit
            </button>
        </div>
    )
}