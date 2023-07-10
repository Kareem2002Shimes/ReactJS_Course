import React, { Component } from "react";
import WithCounter from "./WithCounter";

class ClickCounter extends Component {
  render() {
    const { count, handleIncrement, name } = this.props;
    return (
      <div>
        <h1>My name is {name}</h1>
        <button onClick={handleIncrement}>Clicked {count} Times</button>
      </div>
    );
  }
}
export default WithCounter(ClickCounter, 1);
