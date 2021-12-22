import React from 'react';
import ReactDom from 'react-dom';
import Carousel from './carousel';

const container = document.querySelector('#root');

const pokemon = [
  { number: '001', name: 'Bulbasaur', img: 'images/001.png' },
  { number: '004', name: 'Charmander', img: 'images/004.png' },
  { number: '007', name: 'Squirtle', img: 'images/007.png' },
  { number: '025', name: 'Pikachu', img: 'images/025.png' },
  { number: '039', name: 'Jigglypuff', img: 'images/039.png' }
];

ReactDom.render(<Carousel images={pokemon}/>, container);
