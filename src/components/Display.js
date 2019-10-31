import React from 'react'


export default function Display({strikes, balls, hit, foul }) {
 
   return (
       <div>
            <h4>Strikes : {strikes}</h4>
            <h4>Balls : {balls}</h4>
            <h4>Hit : {hit}</h4>
            <h4>Foul : {foul}</h4>
            </div>
    )
} 