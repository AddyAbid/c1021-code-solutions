import React from 'react';
import ReactDOM from 'react-dom';

function CustomButton(props) {

  return (
    <button>{props.text}</button>

  );
}

const element = (
  <div>
    <CustomButton text="I" />
    <CustomButton text="know" />
    <CustomButton text="React!" />
  </div>
);
const root = document.querySelector('#root');

ReactDOM.render(element, root);
