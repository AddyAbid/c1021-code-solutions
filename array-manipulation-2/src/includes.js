/* exported includes */
/*

look at each value in given array
if value is equal to any value given
return true
else
false
*/
function includes(array, value) {
  for (var i = 0; i < array.length; i++) {
    if (array[i] === value) {
      return true;
    }
  }
  return false;
}
