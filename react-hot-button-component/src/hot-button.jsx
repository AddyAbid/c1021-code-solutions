import React from 'react';

class HotButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      clickCount: 0
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState({
      clickCount: this.state.clickCount + 1
    });
  }

  render() {
    const clickCount = this.state.clickCount;
    if (clickCount <= 3) {
      return (
      <button className="clickthree button-size" onClick={this.handleClick}>Hot Button</button>
      );
    } else if (clickCount > 3 && clickCount <= 6) {
      return (
        <button className="clicksix button-size" onClick={this.handleClick}>Hot Button</button>
      );
    } else if (clickCount > 6 && clickCount <= 9) {
      return (
        <button className="clicknine button-size" onClick={this.handleClick}>Hot Button</button>
      );
    } else if (clickCount > 9 && clickCount <= 12) {
      return (
        <button className="clicktwelve button-size" onClick={this.handleClick}>Hot Button</button>
      );
    } else if (clickCount > 12 && clickCount <= 15) {
      return (
        <button className="clickfifteen button-size" onClick={this.handleClick}>Hot Button</button>
      );
    } else {
      return (
        <button className="clickeighteen button-size" onClick={this.handleClick}>Hot Button</button>
      );
    }

  }
}

export default HotButton;
