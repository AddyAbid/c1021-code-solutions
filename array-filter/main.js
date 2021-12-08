const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

const names = [
  'Ada',
  'Hedy',
  'Jean',
  'Grace',
  'Evelyn',
  'Joan',
  'Elizabeth',
  'Janese',
  'Donna'
];

const evenNumbersResult = numbers.filter(number => number % 2 === 0);
const overFiveResult = numbers.filter(number => number > 5);
const startWithE = names.filter(name => name.indexOf('E') === 0);
const haveD = names.filter(name => name.includes('d') || name.includes('D'));

console.log('Even numbers:', evenNumbersResult);
console.log('Numbers over 5:', overFiveResult);
console.log('Names that start with E:', startWithE);
console.log('Names that include d or D:', haveD);
