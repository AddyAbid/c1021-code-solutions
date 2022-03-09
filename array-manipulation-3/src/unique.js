/* exported unique */
/*
create empty array for output
look at each value in given array
assign those values to variable
if the values are not present in output
add them
return output

*/

function unique(array) {
  var outPut = [];
  for (var i = 0; i < array.length; i++) {
    var eachValue = array[i];
    if (outPut.indexOf(eachValue) === -1) {
      outPut.push(eachValue);
    }
  }
  return outPut;
}
