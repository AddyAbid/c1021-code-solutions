/* exported tail */
/*
create storage for output
check each value after the first
add them to storage
return storage
*/

function tail(array) {
  var outPut = [];
  for (var i = 1; i < array.length; i++) {
    outPut.push(array[i]);
  }
  return outPut;
}
