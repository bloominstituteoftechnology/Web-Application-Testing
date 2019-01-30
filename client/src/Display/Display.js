import React from 'react';

class Dashboard extends React.Component {

    render() {
        return (
            <>
                <div className="display">
                    <div data-testid="Strikes">{`${this.props.strikes} Strikes`}</div>
                    <div data-testid="Balls">{`${this.props.balls} Balls`}</div>

                </div>

            </>
        );
    }


}

export default Dashboard;