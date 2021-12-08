const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

const languages = [
  'Hypertext Markup Language',
  'Cascading Style Sheets',
  'ECMAScript',
  'PHP Hypertext Preprocessor',
  'Structured Query Language'
];

const doubled = number => {
  return number * 2;
};
const result = numbers.map(doubled);

const prices = numbers.map(number => `$${number.toFixed(2)}`);
const upperCased = languages.map(string => string.toUpperCase());
const firstLetters = languages.map(string => string[0]);

console.log('result of doubled:', result);
console.log('result of prices:', prices);
console.log('result of upperCased:', upperCased);
console.log('result of firstLetters:', firstLetters);
