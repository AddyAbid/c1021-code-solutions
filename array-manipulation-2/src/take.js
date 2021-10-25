/* exported take */
/*
create storage for output
assign array starting at 0 up until given number
return storage
*/

function take(array, count) {
  var outPut = array.slice(0, count);
  return outPut;
}
