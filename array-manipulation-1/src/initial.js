/* exported initial */
/*
create storage for output
check each value in array until the last value
add values to storage
return storage
*/

function initial(array) {
  var outPut = [];
  for (var i = 0; i < array.length - 1; i++) {
    outPut.push(array[i]);
  }
  return outPut;
}
