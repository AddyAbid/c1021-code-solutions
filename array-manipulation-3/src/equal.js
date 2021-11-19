/* exported equal */
/*
check if length of both arrays is not eqaul
if true then return false
look at each value given in first array
if the first  is not strictly equal to the second
return false
else
return true

*/
function equal(first, second) {
  if (first.length !== second.length) {
    return false;
  }
  for (var i = 0; i < first.length; i++) {
    if (first[i] !== second[i]) {
      return false;
    }
  }
  return true;
}
