/* exported reverse */
/*
create storage for output
look at each value in array starting from last value until 0
add values to storage
return storage
*/

function reverse(array) {
  var outPut = [];
  for (var i = array.length - 1; i >= 0; i--) {
    outPut.push(array[i]);
  }
  return outPut;
}
