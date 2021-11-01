/* exported swapChars */
/*
convert given string into array
assign first index to second
and second index to first
join array
return string
*/

function swapChars(firstIndex, secondIndex, string) {
  var converted = string.split();
  var outPut = converted[firstIndex];
  converted[firstIndex] = converted[secondIndex];
  converted[secondIndex] = outPut;
  return outPut;
}
