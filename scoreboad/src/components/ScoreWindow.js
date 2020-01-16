import React from "react";

const scoreWindowStyle = {
  background: 'white',
  width: '80px',
  height: '120px',
  borderRadius: '5px',
  border: '1px solid black',
  margin: '30px'
}

const scoreContainer = {
  width: '400px',
  height: '600px',
  display: 'flex',
  flexFlow: 'row wrap',
  justifyContent: 'space-evenly'
}

const ScoreWindow = props => {
  return (
    <>
      <div style={scoreContainer}>
        <h1>{props.name}</h1>
        <div style={scoreContainer}>
          <div style={scoreWindowStyle}>
            <h1>{props.score}</h1>
            <h2>Score</h2>
          </div>
          <div style={scoreWindowStyle}>
            <h1>{props.balls}</h1>
            <h2>Balls</h2>
          </div>
          <div style={scoreWindowStyle}>
            <h1>{props.strikes}</h1>
            <h2>Strikes</h2>
          </div>
          <div style={scoreWindowStyle}>
            <h1>{props.outs}</h1>
            <h2>Outs</h2>
          </div>
        </div>
      </div>
    </>
  )
}

export default ScoreWindow;