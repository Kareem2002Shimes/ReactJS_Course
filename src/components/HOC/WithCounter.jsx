import React, { Component } from "react";
function WithCounter(WrappedComponent, incrementNumber) {
  return class WithCounter extends Component {
    constructor(props) {
      super(props);
      this.state = {
        count: 0,
      };
    }
    handleIncrement = () => {
      this.setState((prevState) => {
        return {
          count: prevState.count + incrementNumber,
        };
      });
    };
    render() {
      return (
        <WrappedComponent
          count={this.state.count}
          handleIncrement={this.handleIncrement}
          {...this.props}
        />
      );
    }
  };
}

export default WithCounter;
