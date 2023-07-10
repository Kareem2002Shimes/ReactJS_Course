import { Component } from "react";

class CountClassTwo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
    console.log("constructor 2");

    this.handleEvent = this.handleEvent.bind(this);
  }
  handleEvent() {
    this.setState({
      count: this.state.count + 1,
    });
  }
  static getDerivedStateFromProps(props, state) {
    console.log("getDerivedStateFromProps 2");
    return null;
  }
  componentDidMount() {
    console.log("componentDidMount 2");
  }
  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log("getSnapshotBeforeUpdate 2");
    return null;
  }
  shouldComponentUpdate(NextProps, NextState) {
    console.log("shouldComponentUpdate 2");
    return true;
  }
  componentDidUpdate() {
    console.log("componentDidUpdate 2");
  }

  render() {
    console.log("render 2");
    return (
      <div>
        <h1>Count - {this.state.count}</h1>
        <button onClick={this.handleEvent}>Increment</button>
      </div>
    );
  }
}

export default CountClassTwo;
