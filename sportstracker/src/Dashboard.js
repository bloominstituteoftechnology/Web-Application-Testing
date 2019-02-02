import React from 'react';
import ReactDOM from 'react-dom';

class Dashboard extends React.Component {

    constructor(props) {
    super(props);
    }

    render() {
    return (
        <div>
            <button on onClick={this.props.strikeClick}>Strike</button>
            <button onClick={this.props.ballClick}>Ball</button>
            <button>Foul</button>
            <button>Hit</button>
        </div>
    )
    }
   }

   export default Dashboard;