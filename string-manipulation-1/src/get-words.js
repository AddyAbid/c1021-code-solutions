/* exported getWords */
/*
create storage for output
create storage for current word
check if string is empty
if so, return output
check each character in string
if it is not equal to a space
add that to the current word
otherwise
add the current word to the ouput storage
and set the current word to empty
add the last word to the output storage
return output
*/

function getWords(string) {
  var outPut = [];
  var currentWord = '';
  if (string === currentWord) {
    return outPut;
  }
  for (var i = 0; i < string.length; i++) {
    if (string[i] !== ' ') {
      currentWord = currentWord + string[i];
    } else {
      outPut.push(currentWord);
      currentWord = '';
    }
  }
  outPut.push(currentWord);
  return outPut;
}
