/* exported swapChars */
/*
convert given string into array
assign first index to second
and second index to first
join array
return string
*/

function swapChars(firstIndex, secondIndex, string) {
  var arr = string.split(' ');
  arr[firstIndex] = arr[secondIndex];
  arr[secondIndex] = arr[firstIndex];
  var outPut = arr.join(' ');
  return outPut;
}
