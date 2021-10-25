/* exported dropRight */
/*
copy array to storage
return new array from first index minus given number
*/

function dropRight(array, count) {
  var outPut = array;
  return outPut.slice(0, -count);
}
