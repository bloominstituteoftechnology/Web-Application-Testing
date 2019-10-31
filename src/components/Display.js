import React from 'react'
import Dashboard from './DashBoard';


export default function Display ({strikes, balls, hits, fouls }){
 
   return (
    
       <div>
          <Dashboard/>
            <button onClick={strikes}>
          Strike
        </button>
        <button  onClick={hits}>
          Hit
        </button>
        <button onClick={fouls}>
          Foul
        </button>
        <button onClick={balls}>
          Ball 
        </button>
            </div>
    )
} 