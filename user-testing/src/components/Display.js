import React from 'react'


const Display = props => {
    console.log(props)
    return (<div><p>Strikes: {props.strikes} Balls: {props.balls}</p></div>)
}

export default Display;