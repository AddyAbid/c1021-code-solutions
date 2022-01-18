/* exported reverseWords */
/*
create storage for each word to hold
create storage for output
look at each character in given string
if current is not equal to a space
add that character to beginning of variable
otherwise
add that current word plus a space to the output
clear any characters in the current word storage
add the value of the current word to output
return output
*/

function reverseWords(string) {
  var eachword = '';
  var outPut = '';
  for (var i = 0; i < string.length; i++) {
    if (string[i] !== ' ') {
      eachword = string[i] + eachword;
    } else {
      outPut += eachword + ' ';
      eachword = '';
    }
  }
  outPut += eachword;
  return outPut;
}
