/* exported ransomCase */
/*
create empty storage
copy given string
look at each character position in string
if current position is even that letter is lower case
if it is odd
that letter is upper case
add to storage
return storage

*/

function ransomCase(string) {
  var outPut = '';
  var copied = string;
  for (var i = 0; i < copied.length; i++) {
    if (i % 2 === 0) {
      outPut += copied[i].toLowerCase();
    } else if (i % 2 !== 0) {
      outPut += copied[i].toUpperCase();
    }
  }
  return outPut;
}
