/* exported isLowerCased */
/*
create storage for output
look at each letter in word
if any letter is lowercase
return true
else if any letter is uppercase
return false
*/

function isLowerCased(word) {
  var outPut = true;
  for (var i = 0; i < word.length; i++) {
    if (word[i] === word[i].toLowerCase()) {
      return outPut;
    } else {
      outPut = false;
    }
  }
  return outPut;
}
