/* exported capitalizeWord */
/*
make all letters lower case and place in storage
make first letter uppercase and place in storage
add first letter with every letter after first and place in new storage
if word is equal to Javascript
change the s to uppercase
return storage
*/

function capitalizeWord(word) {
  var lower = word.toLowerCase();
  var upper = word[0].toUpperCase();
  var outPut = upper + lower.substr(1);
  if (outPut === 'Javascript') {
    outPut = 'JavaScript';
  }
  return outPut;
}
