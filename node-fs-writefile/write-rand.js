const fs = require('fs');
const data = String(Math.random());

fs.writeFile('random.txt', data, err => {
  if (err) throw err;
  return data;
});
