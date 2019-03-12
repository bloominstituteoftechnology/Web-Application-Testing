import React from "react";
import Hits from "./Hits";
import Strikes from "./Strikes";
import Balls from "./Balls";
class Dashboard extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0
    };
  }

  onChangeCount(change) {
    this.setState({
      count: this.state.count + change
    });
    /*
      this.setState((previousState) => ({
        count: previousState + change
      }));
      */
  }

  render() {
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "space-around",
          margin: "10px",
          padding: "200px"
        }}
      >

        <Balls />
        <Strikes />
        <Hits />{" "}
      </div>
    );
  }
}

export default Dashboard;
