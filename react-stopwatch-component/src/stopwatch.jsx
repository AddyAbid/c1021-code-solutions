import React from 'react';
let timerId = null;
class StopWatch extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      timer: 0,
      isPaused: true
    };
    this.Start = this.Start.bind(this);
    this.Stop = this.Stop.bind(this);
    this.StartTimer = this.StartTimer.bind(this);
    this.SetTimeToZero = this.SetTimeToZero.bind(this);
  }

  StartTimer() {
    this.setState({
      timer: this.state.timer + 1
    });
  }

  Start() {
    timerId = setInterval(this.StartTimer, 1000);
    this.setState({
      isPaused: false
    });
  }

  Stop() {
    clearInterval(timerId);
    this.setState({
      isPaused: true
    });
  }

  SetTimeToZero() {
    this.setState({
      timer: 0
    });
  }

  render() {

    if (this.state.isPaused) {
      return (
        <div className="circle" >
          <span className="line-height" onClick={this.SetTimeToZero}>
            {this.state.timer}
          </span>
          <i className="fas fa-play fa-xs" id="block" onClick={this.Start}></i>
        </div>

      );
    } else {
      return (
        <div className="circle" >
          <span className="line-height">
            {this.state.timer}
          </span>
          <i className="fas fa-pause fa-xs" id="block" onClick={this.Stop}></i>
        </div>

      );
    }
  }
}

export default StopWatch;
