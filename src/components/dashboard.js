import React from 'react';

const Dashboard = (props) => {

    return(
        <div className = "dashboard-container">
            <div className = "buttons">
                <div className = "home-buttons">
                    <button className = "homeButtons-touchdown" onClick = {() => {
                        props.setBalls(addBall(props.balls))}}>Balls
                    </button>
                    <button className = "homeButtons-fieldgoal" onClick = {() => {
                        let values = addStrike(props.strikes, props.outs);
                        props.setStrikes(values[0]);

                        if(props.out !== values[1]) {
                            if(props.outs > values[1]) {
                                if(props.whosUp === 'Home') {
                                    props.setWhosUp('Away');
                                }else {
                                    props.setWhosUp('Home');
                                }
                            }
                            props.setBalls(0);
                        }
                        props.setOuts(values[1]);
                    }}>Strike</button>
                    
                </div>
                <div className = "away-buttons">
                    <button className = "awayButtons-touchdown" onClick = {() => {
                        props.setStrikes(addFoul(props.strikes))}}>Foul
                    </button>
                    <button className = "awayButtons-fieldGoal" onClick = {()=> {
                        let values = addStrike(3, props.outs);
                        if(props.outs > values[1]) {
                            if(props.whosUp === 'Home') {
                                props.setWhosUp('Away');
                            }else {
                                props.setWhosUp('Home');
                            }
                        } props.setBalls(0);
                        props.setStrikes(0);
                        props.setOuts(values[1]);
                    }}>Out</button>
                    <button className = "awayButtons-fieldGoal" onClick={()=> {
                        if(props.whosUp === 'Home') {
                            props.setHomeHits(props.homeHits+1);
                        } else {
                            props.setAwayHits(props.AwayHits+1);
                        }


                        props.setStrikes(0);
                        props.setBalls(0);


                     }}>Hit</button>
                </div>
            </div>
        </div>
    );
};

const addBall = (prevCount) => {
    
    let newCount = prevCount +1;
    if (newCount > 3) {
        newCount = 0;
    }
    return newCount;
}

const addStrike = (prevStrike, prevOut) => {
    
    let newStrike = prevStrike +1;
    let newOut = prevOut;
    console.log(prevStrike);

    if (newStrike > 2) {
        newStrike = 0;
        newOut = addOut(prevOut);
    }

    return [newStrike, newOut];
}

const addFoul = (prevStrike) => {
    
    let newStrike = prevStrike +1;

    if (newStrike > 2) {
        newStrike = 2;
    }

    return newStrike;
}

const addOut = (prevOut) => {
    
    let newOut = prevOut + 1;
    
    if (newOut > 2) {
        newOut = 0;
    }

    return newOut;
}




export default Dashboard;
export {addBall, addStrike, addFoul, addOut};