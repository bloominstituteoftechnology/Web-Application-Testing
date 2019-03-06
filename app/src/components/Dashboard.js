import React from 'react';

class Dashboard extends React.Component {
  render() {
    return (
      <div className="dashboard">
        {Object.keys(this.props.funcs).map(name => <button 
          data-testid={`${name}-btn`} 
          className="dashboard-button" 
          key={name} 
          onClick={this.props.funcs[name]}>
          {name}
        </button>)}
      </div>
    );
  }
}

export default Dashboard;
