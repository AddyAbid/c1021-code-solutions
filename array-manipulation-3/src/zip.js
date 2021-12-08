/* exported zip */
/*
if the lenght of the arrays are not equal remove last index
push arrays into storage
search through each value by 2
push to output storage
 */

function zip(first, second) {
  var outPut = [];
  if (first.length > second.length) {
    first.pop();
  } else if (first.length < second.length) {
    second.pop();
  }
  for (var i = 0; i < first.length; i++) {
    outPut.push([].concat(first[i], second[i]));
  }
  return outPut;
}
