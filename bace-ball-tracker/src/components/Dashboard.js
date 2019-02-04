import React, { Component } from "react";
import { Button, ButtonGroup } from "react-bootstrap";

 import Display from "./Display";

 import styled from "styled-components";

 const ButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  padding-top: 25px;
`;

export default class Dashboard extends Component {
  state = {
    balls: 0,
    strikes: 0,
    hit: false,
    foul: false
  };
  
  render() {
    return (
      <div>
        <Display />
          <ButtonContainer>
            <Button variant="danger" size="lg" style={{ marginBottom: "10px" }}>
              Strike!
          </Button>
            <Button
              variant="secondary"
              size="lg"
              style={{ marginBottom: "10px" }}
            >Ball!
          </Button>
          <Button variant="warning" size="lg" style={{ marginBottom: "10px" }}>
            Foul!
          </Button>
          <Button variant="success" size="lg" style={{ marginBottom: "10px" }}>
            Hit!
          </Button>
          </ButtonContainer>
      </div>
    );
  }
}