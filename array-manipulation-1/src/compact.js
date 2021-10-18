/* exported compact */
/*
create storage for outPut
check each value in array
if current value is not equal to null, undefined, false, '', and Nan
add to storage
return storage

*/

function compact(array) {
  var outPut = [];
  for (var i = 0; i < array.length; i++) {
    if (array[i] !== null & array[i] !== undefined && array[i] !== Boolean(false) && array[i] !== '' && array[i] !== 0 && !Number.isNaN(array[i])) {
      outPut.push(array[i]);
    }
  }
  return outPut;
}
