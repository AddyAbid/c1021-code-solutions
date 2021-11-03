/* exported capitalizeWords */
/*
assign given value to a storage and make values all lowercase
change the storage holding the values to an array and split by each space
look at each value in the new array
at the current word, make the first letter uppercase and add the rest of the word after the first letter
create new storage for output and assign the new value of the word joined back together at each space
return output
*/

function capitalizeWords(string) {
  var word = string.toLowerCase();
  word = word.split(' ');
  for (var i = 0; i < word.length; i++) {
    word[i] = word[i][0].toUpperCase() + word[i].substring(1);
  }
  var outPut = word.join(' ');
  return outPut;
}
