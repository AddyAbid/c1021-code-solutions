import React from 'react';

class FormValidator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      password: '',
      message: 'A Password is required',
      validator: 'times red'
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({
      password: event.target.value
    });
    if (event.target.value.length >= 8) {
      this.setState({
        message: '',
        validator: 'check green'
      });
    } else if (event.target.value.length <= 8) {
      this.setState({
        message: 'Password is too short',
        validator: 'times red'
      });
    }
  }

  render() {
    return (
      <form>
        <label className="new-line">Password</label>
        <input type="password" onChange={this.handleChange} value={this.state.password} />
        <i className={`fas fa-${this.state.validator}`}></i>
        <p>{this.state.message}</p>
      </form>
    );
  }
}

export default FormValidator;
