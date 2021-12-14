import React from 'react';

class Accordian extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      openIndex: null
    };
  }

  render() {
    const eachLanguage = (
      <div className="mt">
        {
          codeTopics.map((obj, index) => {
            const handleClick = event => {
              this.setState({
                openIndex: index
              });
              if (this.state.openIndex === obj.key) {
                this.setState({
                  openIndex: null
                });
              }
            };
            return (
              <div className="box" key={index} onClick={handleClick}>
              <h4>{obj.language}</h4>
                <div id={this.state.openIndex === obj.key ? 'open' : 'hidden'} className="descbox"><p>{obj.description}</p></div>
            </div>
            );
          })
        }
      </div>
    );
    return (
      eachLanguage
    );
  }
}
export default Accordian;

const codeTopics = [
  { key: 0, language: 'Hypertext Markup Language', description: 'HyperText Markup Language (HTML) is the standard markup language for creating web pages and web applications. With Cascading Style Sheets (CSS) and JavaScript, it forms a triad of conerstone technologies for the World Wide Web.' },
  { key: 1, language: 'Cascading Style Sheets', description: 'Cascading Style Sheets (CSS) is a style sheet language used for describing the presentation of a document written in a markup language like HTML. CSS is a conerstone technology of the World Wide Web alongside HTML and JavaScript' },
  { key: 2, language: 'JavaScript', description: 'JavaScript, often abbreviated as JS, is a high-level, interpreted programming language that conforms to the ECMAScript specification. JavaScript has curly-bracket syntax, dynamic typing, prototype-based object-orientation, and first-class functions.' }
];
