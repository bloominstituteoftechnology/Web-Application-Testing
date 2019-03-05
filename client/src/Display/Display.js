import React from 'react';

class Dashboard extends React.Component {

    render() {
        return (
            <>
                <div className="display">
                    <div data-testid="Strikes">{`${this.props.strikes} strikes`}</div>
                    <div data-testid="Balls">{`${this.props.balls} balls`}</div>

                </div>

            </>
        );
    }


}

export default Dashboard;