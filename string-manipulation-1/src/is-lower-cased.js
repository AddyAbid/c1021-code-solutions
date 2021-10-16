/* exported isLowerCased */
/*
look at each letter in word
if any letter is lowercase
return true
else if any letter is uppercase
return false
*/

function isLowerCased(word) {
  for (var i = 0; i < word.length; i++) {
    if (word[i] === word[i].toLowerCase()) {
      return true;
    } else if (word[i] === word[i].toUpperCase()) {
      return false;
    }
  }
}
