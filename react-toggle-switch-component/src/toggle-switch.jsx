import React from 'react';

class ToggleSwitch extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      toggle: true
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    if (this.state.toggle) {
      this.setState({
        toggle: false
      });
    } else {
      this.setState({
        toggle: true
      });
    }
  }

  render() {
    if (this.state.toggle) {
      return (
        <div className="switch">
          <span className="slider round">
            <div className="circle" onClick={this.handleClick}></div>
          <div className="toggle-text">{this.state.toggle}ON</div>
          </span>
        </div>
      );
    } else {
      return (
        <div className="switch">
          <span className="slider slider-off round">
            <div className="circle circle-off" onClick={this.handleClick}></div>
            <div className="toggle-text">{this.state.toggle}OFF</div>
          </span>
        </div>
      );
    }
  }
}

export default ToggleSwitch;
