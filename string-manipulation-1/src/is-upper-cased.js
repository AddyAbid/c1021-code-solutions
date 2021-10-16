/* exported isUpperCased */
/*
look at each letter in word
if any letters throughout word are lowercase
  - return false
else
return true

*/
function isUpperCased(word) {
  for (var i = 0; i < word.length; i++) {
    if (word[i] === word[i].toLowerCase()) {
      return false;
    }

  }
  return true;
}
