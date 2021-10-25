/* exported takeRight */
/*
negative number starts at end of array
assign array starting at end going back to given number to output
return output
*/

function takeRight(array, count) {
  var outPut = array.slice(-count);
  return outPut;
}
