import React from 'react';


class Display extends React.Component {
       
    render() {
        return (
            <div >
                <Display />
                <h1>{this.props.strike} Strike</h1>

                <h1>{this.props.ball} Ball</h1>

                <button onClick={() => {
                    this.props.foulHandler();
                    this.props.resetStrike();
                }} >Foul</button>
                <button onClick={() => {
                    this.props.BallHandler();
                    this.props.resetBall();
                }}>Ball</button>
                <button onClick={this.props.hitHandler}>Hit</button>
                <button onClick={() => {
                    this.props.strikeHandler();
                    this.props.resetStrike();
                }}>Strike</button>
            </div>
        )
    }

}

export default Display;
