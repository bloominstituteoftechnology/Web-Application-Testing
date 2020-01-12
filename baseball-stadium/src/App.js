import React, { Component } from "react";
import "./styles/App.css";
import { Display } from "./components/Display";
import { Dashboard } from "./components/Dashboard";
import { Roster } from "./components/Roster";
import { Record } from "./components/GameRecord";
import { BaseTracker } from "./components/BaseTracker";
import { Tracker } from "./components/Tracker";
//todo check better comments ext for adding /*! and so forth
class App extends Component {
  constructor() {
    super();
    this.state = {
      strike: 0,
      ball: 0,
      foul: 0,
      hit: 0,
      inning: 0,
      error: 0,
      out: 0,
      batting: {
        team: "",
        player: ""
      },
      bases: {
        base1: "",
        base2: "",
        base3: "",
        base4: ""
      },
      teams: {
        home: {
          players: ["Braden", "Wes", "Steven", "Ark"],
          record: {
            hStrikes: 0,
            hBalls: 0,
            hFouls: 0,
            hHits: [],
            hRuns: 0,
            hErrors: 0
          },
          lastBat: 0
        },
        visitor: {
          players: ["AR", "Jeffery", "Jessica", "Jose"],
          record: {
            vStrikes: 0,
            vBalls: 0,
            vFouls: 0,
            vHits: [],
            vRuns: 0,
            vErrors: 0
          },
          lastBat: 0
        }
      }
    };
  }

  componentDidMount() {
    // console.log("mounted");
    this.setState({
      inning: 1,
      batting: {
        team: Object.keys(this.state.teams)[0],
        player: this.state.teams.home.players[0]
      }
    });
  }

  componentDidUpdate() {
    // ! Player Strike Out
    if (this.state.strike === 3 && this.state.out < 3) {
      // this.newBatter();
      this.newBatter();
      this.setState({
        out: this.state.out + 1
      });
    }

    if (this.state.out === 3) {
      this.newInning();
    }

    if (this.state.strike === 3 || this.state.ball === 4) {
      this.setState({
        ball: 0,
        strike: 0
      });
    }
  }

  newBatter = () => {
    let batter =
      this.state.teams[this.state.batting.team].players.findIndex(
        e => e === this.state.batting.player
      ) + 1;

    if (batter === this.state.teams[this.state.batting.team].players.length) {
      batter = 0;
    }

    this.setState({
      ball: 0,
      strike: 0,
      batting: {
        team: this.state.batting.team,
        player: this.state.teams[this.state.batting.team].players[batter]
      }
    });
  };

  newInning = () => {
    let newTeam = "";
    this.state.batting.team === "home"
      ? (newTeam = Object.keys(this.state.teams)[1])
      : (newTeam = Object.keys(this.state.teams)[0]);
    console.log(newTeam);

    this.setState({
      inning: this.state.inning + 1,
      ball: 0,
      strike: 0,
      out: 0,
      batting: {
        team: newTeam,
        player: this.state.teams[newTeam].players[
          this.state.teams[newTeam].lastBat
        ]
      }
    });
  };

  strikeHandler = () => {
    console.log("strike");
    this.setState({
      strike: this.state.strike + 1
    });
  };

  ballHandler = () => {
    console.log("ball");
    this.setState({
      ball: this.state.ball + 1
    });
  };

  foulHandler = () => {
    console.log("foul");
    if (this.state.strike === 0) {
      this.setState({
        strike: 1,
        foul: this.state.foul + 1
      });
    } else if (this.state.strike === 1) {
      this.setState({
        strike: 2,
        foul: this.state.foul + 1
      });
    } else {
      this.setState({
        foul: this.state.foul + 1
      });
    }
  };

  errorHandler = () => {
    this.setState({
      error: this.state.error + 1
    });
  };

  hitSingleHandler = () => {
    this.setState({
      strike: 0,
      ball: 0,
      hit: this.state.hit + 1
    });
  };

  hitDoubleHandler = () => {
    this.setState({
      strike: 0,
      ball: 0,
      hit: this.state.hit + 1
    });
  };

  hitTripleHandler = () => {
    this.setState({
      strike: 0,
      ball: 0,
      hit: this.state.hit + 1
    });
  };

  hitHomeRunHandler = () => {
    this.setState({
      strike: 0,
      ball: 0,
      hit: this.state.hit + 1
    });
  };

  resetHandler = () => {
    this.setState({
      strike: 0,
      ball: 0,
      foul: 0,
      hit: 0,
      inning: 1,
      error: 0,
      out: 0,
      batting: {
        team: Object.keys(this.state.teams)[0],
        player: this.state.teams.home.players[0]
      },
      bases: {
        base1: "",
        base2: "",
        base3: "",
        base4: ""
      },
      teams: {
        home: {
          players: ["Braden", "Wes", "Steven", "Ark"],
          record: {
            hStrikes: 0,
            hBalls: 0,
            hFouls: 0,
            hHits: [],
            hRuns: 0,
            hErrors: 0
          }
        },
        visitor: {
          players: ["AR", "Jeffery", "Jessica", "Jose"],
          record: {
            vStrikes: 0,
            vBalls: 0,
            vFouls: 0,
            vHits: [],
            vRuns: 0,
            vErrors: 0
          }
        }
      }
    });
  };

  render() {
    // console.log("state", this.state);
    // console.log("reset", this.resetHandler);
    return (
      //todo add routes to team record and Roster components
      <div className="App">
        <h1>Baseball Testing</h1>
        <Display state={this.state} />
        <Tracker state={this.state} />
        <Dashboard
          strike={this.strikeHandler}
          ball={this.ballHandler}
          foul={this.foulHandler}
          error={this.errorHandler}
          single={this.hitSingleHandler}
          double={this.hitDoubleHandler}
          triple={this.hitTripleHandler}
          homeRun={this.hitHomeRunHandler}
          reset={this.resetHandler}
        />
        {/* <Roster teams={this.state.teams} /> */}
        {/* <Record teams={this.state.teams} /> */}
        <BaseTracker bases={this.state.bases} />
      </div>
    );
  }
}

export default App;
