/* exported capitalize */
/*
create storage for all lowercase letters
create storage for first uppercase letters
change lowercase to remove first letter of word
add first uppercase letter with remaining letters and assign to new storage
return storage
*/

function capitalize(word) {

  var lowerCase = word.toLowerCase();
  var upperCase = word[0].toUpperCase();
  lowerCase = lowerCase.substr(1);
  var outPut = upperCase + lowerCase;
  return outPut;
}
