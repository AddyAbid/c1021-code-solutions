/* exported numVowels */
/*
create storage starting at 0
check each letter in string
if equal to vowel
add each vowel to storage count
return storage

*/

function numVowels(string) {
  var outPut = 0;
  for (var i = 0; i < string.length; i++) {
    if (string[i] === 'a' || string[i] === 'A' || string[i] === 'e' || string[i] === 'E' || string[i] === 'i' || string[i] === 'I' || string[i] === 'o' || string[i] === 'O' || string[i] === 'u' || string[i] === 'U') {
      outPut += string[i].length;
    }
  }
  return outPut;
}
