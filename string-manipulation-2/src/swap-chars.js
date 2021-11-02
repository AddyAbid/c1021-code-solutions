/* exported swapChars */
/*
convert given string into array and assign to storage
create new storage to hold the arrays first index value
assign second index to first index
assign second index to new storage
join the values together and convert to string data type
return converted array
*/

function swapChars(firstIndex, secondIndex, string) {
  var converted = string.split('');
  var storage = converted[firstIndex];
  converted[firstIndex] = converted[secondIndex];
  converted[secondIndex] = storage;
  converted = converted.join('').toString();
  return converted;
}
