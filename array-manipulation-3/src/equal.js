/* exported equal */
/*
look at each value given in first array
assign those values to a storage
look at each value given in second array
assign those values to a new storage
if the first storage is not strictly equal to the second
return false
else
return true

*/
function equal(first, second) {
  for (var i = 0; i < first.length; i++) {
    if (first[i] === second[i]) {
      return true;
    }
  }
  return false;
}
