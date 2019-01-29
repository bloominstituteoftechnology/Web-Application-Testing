import React, { Component } from 'react';


function Dashboard (props) {
   
    return (
      <div >
        <button data-testid="strike-btn" onClick={props.strikesHandler}>Strike</button>
        <button data-testid="ball-btn" onClick={props.ballsHandler}>Ball</button>
        <button data-testid="foul-btn" onClick={props.foulsHandler}>Foul</button>
        <button data-testid="hit-btn" onClick={props.hitHandler}>Hit</button>
      </div>
    );
  
}

export default Dashboard;