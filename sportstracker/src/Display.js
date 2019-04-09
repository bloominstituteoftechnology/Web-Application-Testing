import React from 'react';
import ReactDOM from 'react-dom';

class Display extends React.Component {

    constructor(props) {
    super(props);
    }

    render() {
    return (
        <div>
            <h1>At Bat</h1>
            <h2 data-testid="balls">Balls: {this.props.balls}</h2>
            <h2 data-testid="strikes">Strikes: {this.props.strikes}</h2>
        </div>
    )
    }
   }

   export default Display;