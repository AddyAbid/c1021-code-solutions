const takeAChance = require('./take-a-chance');
const takeChanceReturn = takeAChance('Addy');

takeChanceReturn.then(value => {
  console.log(value);
});

takeChanceReturn.catch(error => {
  console.log(error.message);
});
