import React from 'react';

class Display extends React.Component {
    render() {
        return (
            <div className="display">
                <div className="display-section">
                    <p>Strikes: {this.props.strikes}</p>
                </div>
                <div className="display-section">
                    <p>Balls: {this.props.balls}</p>
                </div>
            </div>
        );
    }
}

export default Display;
