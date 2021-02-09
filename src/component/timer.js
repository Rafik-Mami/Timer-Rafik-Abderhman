import React, { Component } from "react";

export default class timer extends Component {
  state = {
    timer: 0,
    interval: 0,
    btn: "start",
  };
  handle = () => {
    if (this.state.btn === "start") {
      this.interval = setInterval(() => {
        this.setState((prevState) => ({
          timer: prevState.timer + 1,
        }));
      }, 1000);
      this.setState({
        btn: "stop",
      });
    } else {
      clearInterval(this.interval);

      this.setState({
        btn: "start",
      });
    }
  };

  handleReset = () => {
    this.setState({
      timer: this.state.timer * 0,
    });
  };
  render() {
    return (
      <div className="App">
        <p className="counter">{this.state.timer}</p>
        <div className="btn">
          <button onClick={this.handle}>{this.state.btn}</button>

          <button onClick={this.handleReset}>reset</button>
        </div>
      </div>
    );
  }
}
