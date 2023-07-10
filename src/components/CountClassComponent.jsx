import { Component } from "react";

class CountClass extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
    console.log("constructor 1");

    this.handleEvent = this.handleEvent.bind(this);
  }
  handleEvent() {
    this.setState({
      count: this.state.count + 1,
    });
  }
  static getDerivedStateFromProps(props, state) {
    console.log("getDerivedStateFromProps 1");
    return null;
  }
  componentDidMount() {
    console.log("componentDidMount 1");
  }
  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log("getSnapshotBeforeUpdate 1");
    return null;
  }
  shouldComponentUpdate(NextProps, NextState) {
    console.log("shouldComponentUpdate 1");
    return true;
  }
  componentDidUpdate() {
    console.log("componentDidUpdate 1");
  }

  render() {
    console.log("render 1");
    return (
      <div>
        <h1>Count - {this.state.count}</h1>
        <button onClick={this.handleEvent}>Increment</button>
      </div>
    );
  }
}

export default CountClass;
