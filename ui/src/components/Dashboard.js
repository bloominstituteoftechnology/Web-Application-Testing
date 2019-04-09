import React from 'react';

import './Dashboard.css';
import Display from './Display';

class Dashboard extends React.Component {
    constructor() {
        super();
        this.state = {
            strikes: 0,
            balls: 0,
        }
    }

    updateStrikes = () => {
        let updatedStrikes = this.state.strikes;
        updatedStrikes++;
        if (updatedStrikes >= 3) {
            updatedStrikes = 0;
        }
        this.setState({
            strikes: updatedStrikes,
        })
    }

    updateBalls = () => {
        let updatedBalls = this.state.balls;
        updatedBalls++;
        if (updatedBalls >= 4) {
            updatedBalls = 0;
        }
        this.setState({
            balls: updatedBalls,
        })
    }

    hit = () => {
        this.setState({
            balls: 0,
            strikes: 0,
        });
    }

    render() {
        return (
            <div>
                <h1>Dashboard</h1>
                <Display data-testid='display' atbat={this.state}/>
                <form> 
                    <button className='btn' name='strike' type='button' onClick={this.updateStrikes}>Strike</button>
                    <button className='btn' name='ball' type='button' onClick={this.updateBalls}>Ball</button>
                    <button className='btn' name='foul' type='button' onClick={this.hit}>Foul</button>
                    <button className='btn' name='hit' type='button' onClick={this.hit}>Hit</button>
                </form>
            </div>
        )
    }
}

export default Dashboard;