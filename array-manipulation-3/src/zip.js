/* exported zip */
/*
if the lenght of the arrays are not equal remove last index
push arrays into storage
search through each value by 2
push to output storage
 */

function zip(first, second) {
  var outPut = [];
  var length = Math.min(first.length, second.length);
  for (var i = 0; i < length; i++) {
    outPut.push([].concat(first[i], second[i]));
  }
  return outPut;
}
