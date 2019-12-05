import React from 'react';

export const Dashboard = () => {

    return (
        <div className="dashboard">
            <div className="balls">
                <h3>Balls</h3>
                <div className="balls_value">{balls}</div>
            </div>
            <div className="strikes">
                <h3>Strikes</h3>
                <div className="strikes_value">{strikes}</div>
            </div>    
            <div className="fouls">
                <h3>Fouls</h3>
                <div className="fouls_value">{fouls}</div>
            </div>    
            <div className="hits">
                <h3>Hits</h3>
                <div className="hits_value">{hits}</div>
            </div>            
        </div>//ends dashboard
    );
}