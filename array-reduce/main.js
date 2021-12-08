
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

const account = [
  { type: 'deposit', amount: 150 },
  { type: 'deposit', amount: 20 },
  { type: 'withdrawal', amount: 5 },
  { type: 'deposit', amount: 100 },
  { type: 'withdrawal', amount: 25 },
  { type: 'withdrawal', amount: 60 }
];

const traits = [
  { color: 'yellow' },
  { type: 'electric' },
  { name: 'pikachu' },
  { level: 15 },
  { trainer: 'ash' }
];

const sum = numbers.reduce((num1, num2) => num1 + num2, 0);
const product = numbers.reduce((num1, num2) => num1 * num2, 1);
const deposits = account.filter(acc => acc.type === 'deposit').reduce((prev, current) => {
  return prev + current.amount;
}, 0);
const withdrawals = account.filter(acc => acc.type === 'withdrawal').reduce((prev, current) => {
  return prev + current.amount;
}, 0);
const balance = deposits - withdrawals;
const composite = traits.reduce((prev, current) => Object.assign(prev, current), {});

console.log('sum:', sum);
console.log('product:', product);
console.log('balance:', balance);
console.log('composite:', composite);
