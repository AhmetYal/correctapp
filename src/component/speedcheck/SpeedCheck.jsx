import React, { Component } from "react";
import ChallengeInput from "./ChallengeInput";
import Info from "./Info";
import Score from "./Score";

const initState = {
  result: null,
};

class SpeedCheck extends Component {
  challenge = "Hello World";
  state = initState;
  setResult = (result) => {
    this.setState({
      result,
    });
  };

  render() {
    return (
      <React.Fragment>
        <Info challenge={this.challenge} />
        <hr />
        <ChallengeInput challenge={this.challenge} setResult={this.setResult} />
        <hr />
        <Score score={this.state.result} />
      </React.Fragment>
    );
  }
}

export default SpeedCheck;
