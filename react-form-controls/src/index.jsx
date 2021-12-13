import React from 'react';
import ReactDom from 'react-dom';

class NewsletterForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: ''
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({
      email: event.target.value
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    console.log('state:', this.state);
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>Email</label>
        <input type="email" onChange={this.handleChange}></input>
        <button type="submit">Sign Up</button>
      </form>
    );
  }
}

const element = document.querySelector('#root');

ReactDom.render(<NewsletterForm />, element);
