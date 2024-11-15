import { Component } from "react";

import "./Timer.css";
import logo from "../../logo.svg";

class Timer extends Component {
  state = {
    count: 0,
    isCounting: false,
    class: "start",
  };

  componentDidMount() {
    const userCount = localStorage.getItem("timer");
    if (userCount) {
      this.setState({ count: +userCount });
    }
  }

  componentDidUpdate() {
    localStorage.setItem("timer", this.state.count);
  }

  componentWillUnmount() {
    clearInterval(this.counterId);
  }

  handleStart = () => {
    this.setState({ isCounting: true, class: "stop" });

    this.counterId = setInterval(() => {
      this.setState({ count: this.state.count + 1 });
    }, 1000);
  };

  handleStop = () => {
    this.setState({ isCounting: false });

    clearInterval(this.counterId);
    this.setState({ class: "start" });
  };

  handleReset = () => {
    this.setState({ isCounting: false, count: 0 });

    clearInterval(this.counterId);
    this.setState({ class: "start" });
  };

  render() {
    return (
      <div className="timer">
        <h2>React timer</h2>
        <img
          onMouseEnter={(e) => (e.target.className = "drive")}
          className={this.state.isCounting ? "logo drive" : "logo"}
          src={logo}
          alt="Logo"
        />
        <div className="display">{this.state.count}</div>
        <div className="actions">
          {!this.state.isCounting ? (
            <button onClick={this.handleStart} className={this.state.class}>
              Start
            </button>
          ) : (
            <button onClick={this.handleStop} className={this.state.class}>
              Stop
            </button>
          )}
          <button onClick={this.handleReset} className="reset">
            Reset
          </button>
        </div>
      </div>
    );
  }
}

export default Timer;
