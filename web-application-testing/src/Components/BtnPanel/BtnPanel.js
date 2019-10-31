import React from 'react';
import './BtnPanel.css';

const BtnPanel = props => {
    return(
        <div className='btnContainer'>
            <button onClick={props.handleStrike}>Strike</button>
            <button onClick={props.handleBall}>Ball</button>
            <button onClick={props.handleHit}>Hit</button>
            <button onClick={props.handleFoul}>Foul</button>   
        </div>
    );
};

export default BtnPanel;