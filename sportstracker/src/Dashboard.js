import React from 'react';
import ReactDOM from 'react-dom';

class Dashboard extends React.Component {

    constructor(props) {
    super(props);
    }

    render() {
    return (
        <div>
            <button>Strike</button>
            <button onClick={this.props.ballClick}>Ball</button>
            <button>Foul</button>
            <button>Hit</button>
        </div>
    )
    }
   }

   export default Dashboard;