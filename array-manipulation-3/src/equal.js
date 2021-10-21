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
    var firstArr = first[i];
  }
  for (var j = 0; j < second.length; j++) {
    var secondArr = second[j];
  }
  if (firstArr !== secondArr) {
    return false;
  }
  return true;
}
