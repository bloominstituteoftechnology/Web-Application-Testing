import React, { Component } from "react";
import { Button } from "react-bootstrap";

import styled from "styled-components";

const ButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  padding-top: 25px;
`;

export default class Dashboard extends Component {
  render() {
    return (
      <div>
        <ButtonContainer>
          <Button
            variant="danger"
            size="lg"
            style={{ marginBottom: "10px" }}
            onClick={this.props.callStrike}
            data-testid="strike-btn"
          >
            Strike!
          </Button>
          <Button
            variant="secondary"
            size="lg"
            style={{ marginBottom: "10px" }}
            onClick={this.props.callBall}
            data-testid="ball-btn"
          >
            Ball!
          </Button>
          <Button
            variant="warning"
            size="lg"
            style={{ marginBottom: "10px" }}
            onClick={this.props.callFoul}
            data-testid="foul-btn"
          >
            Foul!
          </Button>
          <Button
            variant="success"
            size="lg"
            style={{ marginBottom: "10px" }}
            onClick={this.props.callHit}
            data-testid="hit-btn"
          >
            Hit!
          </Button>
        </ButtonContainer>
      </div>
    );
  }
}
