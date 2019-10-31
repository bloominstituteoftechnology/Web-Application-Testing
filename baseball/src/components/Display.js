import React from 'react';
import Dashboard from './Dashboard';

class Display extends React.Component {
    constructor() {
        super();
        this.state = {
            ball: 0,
            foul: 0,
            strike: 0,

        }
    }

    handleStrike = () => {
        if (strike === 2) {
            this.setState({ strike: 0, ball: 0 })
        } else {
            this.setState({ strike: strike + 1 })
        };
    }
    const handleFoul = () => {
        if (strike != 2) {
            this.setState(strike + 1);
        }
    }
    const handleBall = () => {
        if (ball === 3) {
            this.setState({ strike: 0, ball: 0 })
        } else {
            this.setState(balls + 1);
        }
    }


    render() {
        return (
            <div>
                <Dashboard handleStrike={this.handleStrike} />
            </div>
        )
    }
}
export default Display;