/* exported reverseWord */
/*
create storage for output
look at each character in word starting from the end of the word
add each letter to output
return output

*/
function reverseWord(word) {
  var outPut = '';
  for (var i = word.length - 1; i >= 0; i--) {
    outPut += word[i];
  }
  return outPut;
}
