import React from 'react';

class Dashboard extends React.Component {


    called = ev => {

        this.props.call(ev.target.name)
    };

    render() {
        return (
            <>
                <div data-testid="Strikes">{`${this.props.strikes} Strikes`}</div>
                <div data-testid="Balls" >{`${this.props.balls} Balls`}</div>
                <div data-testid="Fouls">{`${this.props.fouls} Fouls`}</div>

                <button name='Strike'
                    onClick={this.called}
                >
                    Strike
                </button>
                <button name='Ball'
                    onClick={this.called}
                >
                    Ball
                </button>
                <button name='Foul'
                    onClick={this.called}
                >
                    Foul
                </button>
                <button name='Hit'
                    onClick={this.called}
                >
                    Hit
                </button>
            </>
        );
    }


}

export default Dashboard;